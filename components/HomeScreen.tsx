import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useCustomContext } from './UserContext';


const HomeScreen: React.FC = () => {
  const  { userData, setUserData } = useCustomContext();

  const {firstName, lastName} = userData;

  return (
    <View>
      <Text>
        {firstName && firstName} {lastName && lastName}
      </Text>
      <TouchableOpacity onPress={()=>{
        setUserData({
            ...userData,
            firstName:'jonh',
            lastName:'doe'
        })
      }}>
        <Text>Change data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
