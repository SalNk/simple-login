import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Template from './Template'
import welcomeStyle from './style'

export default function HomeScreen({ navigation }) {
  return (
    <Template>
      <Text style={welcomeStyle.title}>Let's start</Text>
      <Text 
        style={{ textAlign: 'center', marginTop: 15, marginBottom : 15 }}
      >Your amazing app starts here. Open you favorite code editor and start editing this project.</Text>
      <Text
        onPress={() => navigation.navigate('welcome')}
        style={welcomeStyle.buttonSign}>
       Log out
      </Text>
    </Template>
  )
}

