import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useCustomContext} from './UserContext';

const HomeScreen: React.FC = () => {
  const {userData, setUserData} = useCustomContext();

  const {firstName, lastName, isLoggedIn} = userData;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isLoggedIn && (
        <Text>
          {firstName && firstName} {lastName && lastName}
        </Text>
      )}
      <TouchableOpacity
        onPress={() => {
          setUserData({
            ...userData,
            isLoggedIn: !isLoggedIn,
          });
        }}
        style={{
          width: '50%',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'grey',
        }}>
        <Text>{isLoggedIn ? 'Logout' : 'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
