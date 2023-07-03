import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCustomContext } from './UserContext';

const DetailScreen: React.FC = () => {
    const data = useCustomContext();

    console.log(data)

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})

