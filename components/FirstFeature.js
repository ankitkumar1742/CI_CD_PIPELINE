import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstFeature = () => {
  return (
    <View>
      <Text>FirstFeature!</Text>
      <Text>This is the first feature of this app!</Text>
      <Text>This is the first feature of this app.</Text>
    </View>
  )
}

export default FirstFeature

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
