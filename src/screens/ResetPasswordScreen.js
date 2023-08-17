import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Template from './Template'
import welcomeStyle from './style'

export default function ResetPasswordScreen({ navigation }) {
  return (
    <Template>
      <Text style={welcomeStyle.title}>Welcome back</Text>
      <TextInput placeholder='Email' style={welcomeStyle.input} />
      <Text >You will receive email with password reset link.</Text>
      <Text
        onPress={() => navigation.navigate('login')}
        style={welcomeStyle.button}>
        send instructions
      </Text>

    </Template>
  )
}

