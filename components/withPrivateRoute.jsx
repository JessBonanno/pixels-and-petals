import React from 'react';
const jwt = require('jsonwebtoken');

const RequireAuthentication = (WrappedComponent) => {

    return class extends React.Component {

        static getInitialProps(ctx) {
            console.log(ctx.req.headers);
            let isAuthenticated;
            const token = ctx.req.headers.cookie?.replace('userToken=', '');

            try {
                isAuthenticated = jwt.verify(token, process.env.COOKIE_SECRET);
            } catch (e) {
                console.log(e);
            }

            // Use !isAuthenticated for error cases
            if (isAuthenticated?.user) {
                return WrappedComponent.getInitialProps(ctx);
            } else {
                ctx.res.redirect('/')
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default RequireAuthentication;
