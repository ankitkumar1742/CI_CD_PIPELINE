import {Alert, Text, View} from 'react-native';
import React, {createContext, useContext, useState} from 'react';
import Navigation from './components/Navigation';
import AppContextProvider from './components/UserContext';


function App() {
  return (
    <AppContextProvider>
      <Navigation />
    </AppContextProvider>
  );
}

export default App;
