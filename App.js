import { Text, View } from 'react-native'
import React, { Component } from 'react'
import FirstFeature from './components/FirstFeature'

export class App extends Component {
  render() {
    return (
      <View>
        <FirstFeature/>
      </View>
    )
  }
}

export default App