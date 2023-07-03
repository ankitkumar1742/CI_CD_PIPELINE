import {Alert, Text, View} from 'react-native';
import React, {Children, createContext, useContext, useState} from 'react';

// const userDetails: User = {
//   firstName: 'bruce',
//   lastName: 'wayne',
//   id: 1234,
// };

interface User {
  firstName: string;
  lastName: string;
  id: number;
  isLoggedIn:boolean
}
interface MyContextProps {
  userData: User;
  setUserData: (data: User) => void;
}

const MyContext = createContext({} as MyContextProps);
function AppContextProvider(props: any) {
  const [userData, setUserData] = useState<User>({
    id: 1,
    firstName: 'bruce',
    lastName: 'wayne',
    isLoggedIn:true
  });

  return (
    <MyContext.Provider value={{userData, setUserData}}>
      {props.children}
    </MyContext.Provider>
  );
}

export const useCustomContext = () => {
  const { userData, setUserData } = useContext(MyContext)
  return { userData, setUserData }
}


export default AppContextProvider;
