import { View, Text, TextInput } from 'react-native'
import React from 'react'
import welcomeStyle from './style'
import Template from './Template'
import { COLORS } from '../outils/constants'

export default function SignUpScreen({ navigation }) {
  return (
    <Template>
      <Text style={welcomeStyle.title}>Create Account</Text>
      <TextInput placeholder='Name' style={welcomeStyle.input} />
      <TextInput placeholder='Email' style={welcomeStyle.input} />
      <TextInput placeholder='Password' style={welcomeStyle.input} />
      <Text
        onPress={() => navigation.navigate('login')}
        style={welcomeStyle.button}>
        sign up
      </Text>
      <Text>Already have an account?
        <Text
          onPress={() => navigation.navigate('login')} 
          style={{ color: COLORS.main }}>
          Sign in
        </Text>
      </Text>

    </Template>
  )
}