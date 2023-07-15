import {Alert, Text, View} from 'react-native';
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

// const userDetails: User = {
//   firstName: 'bruce',
//   lastName: 'wayne',
//   id: 1234,
// };

interface User {
  firstName: string;
  lastName: string;
  id: number;
  isLoggedIn: boolean;
}
interface MyContextProps {
  userData: User;
  setUserData: (data: User) => void;
  formatTime: (data: number) => void;
  startTimer: () => void;
  endTimer: () => void;
  timeRemaining:number,
  isQuizOver:boolean
}
const MyContext = createContext({} as MyContextProps);

let timer:number;

function AppContextProvider(props: any) {
  const [userData, setUserData] = useState<User>({
    id: 1,
    firstName: 'bruce',
    lastName: 'wayne',
    isLoggedIn: true,
  });
  const [timeRemaining, setTimeRemaining] = useState<number>(20 * 60);
  const [isQuizOver, setIsQuizOver] = useState<boolean>(false);

  const startTimer =()=>{
    timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    if (timeRemaining <= 0) {
      clearInterval(timer);
      setIsQuizOver(true);
      Alert.alert('time up')
    }
  }
  const endTimer =()=>{
    clearInterval(timer)
  }


  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setTimeRemaining(prevTime => prevTime - 1);
  //   }, 1000);

  //   if (timeRemaining <= 0) {
  //     clearInterval(timer);
  //     setIsQuizOver(true);
  //   }
  //   return () => clearInterval(timer);
  // }, [timeRemaining]);

  const formatTime = (timeInSeconds:number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  // const handleFinishQuiz = () => {
  //   // Handle quiz completion, e.g., show results or navigate to a new screen
  // };

  return (
    <MyContext.Provider value={{userData, setUserData, formatTime,timeRemaining,isQuizOver,startTimer,endTimer}}>
      {props.children}
    </MyContext.Provider>
  );
}

export const useCustomContext = () => {
  const data = useContext(MyContext);
  return {...data};
};

export default AppContextProvider;
