import { useState, useEffect, useReducer, createContext } from "react";


// create context
const Context = createContext({});


// context provider
const Provider = ({ children, folders }) => {
  console.log(folders);
  const [imageFolders, setImageFolders] = useState();
  const aThing = 'this thing'



  const value = {
    imageFolders,
    setImageFolders,
    aThing
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};




export { Context, Provider };


