import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstFeature = () => {
  return (
    <View>
      <Text>FirstFeature!</Text>
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