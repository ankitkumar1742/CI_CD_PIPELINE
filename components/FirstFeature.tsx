import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TypeCheck = {
  name: string,
  numberCount: number,
  anotherData?:string, //here question mark in the end of the anotherData is optional 
  isLoggendIn: boolean
}

const FirstFeature = (props: TypeCheck) => {
  return (
    <View>
      <Text>FirstFeature!</Text>
      {
        props.isLoggendIn ? (
          <Text>This is first feature of this app {props.name} {props.numberCount}</Text>
        ) :(
          <Text>user is not logged in</Text>
        )
      }

    </View>
  )
}

export default FirstFeature

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})