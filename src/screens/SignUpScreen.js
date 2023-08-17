import { View, Text, TextInput } from 'react-native'
import React from 'react'
import welcomeStyle from './style'
import Template from './Template'
import { COLORS } from '../outils/constants'
import { useForm, Controller } from "react-hook-form"
import axios from 'axios'
import IconReturn from './IconReturn'

export default function SignUpScreen({ navigation }) {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  // const onSubmit = (data) => console.log(data)
  // "https://shop.archi-tech.site/api/login"

  const getCreate = data => {
    axios.post("https://shop.archi-tech.site/api/register", {
      headers: {
        accept: "application/json"
      }, ...data
    })
      .then((response) => navigation.navigate('home'))
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  return (

    <Template>

      <IconReturn />

      <Text style={welcomeStyle.title}>Create Account</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="name"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={welcomeStyle.input}
            placeholder='Name'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )} />
      <Text style={{ color: 'red' }}> {errors.name && <Text>Veuillez saisir votre adresse mail</Text>}</Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={welcomeStyle.input}
            placeholder='Email'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )} />
      <Text style={{ color: 'red' }}> {errors.name && <Text>Veuillez saisir votre adresse mail</Text>}</Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="password"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={welcomeStyle.input}
            placeholder='Password'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            secureTextEntry={true}
          />
        )} />
      <Text style={{ color: 'red' }}> {errors.password && <Text>Veuillez saisir votre adresse mail</Text>}</Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="password_confirmation"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={welcomeStyle.input}
            placeholder='Confirme your password'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            secureTextEntry={true}
          />
        )} />
      <Text style={{ color: 'red' }}> {errors.password && <Text>Veuillez saisir votre adresse mail</Text>}</Text>



      <Text
        onPress={handleSubmit(getCreate)}
        style={welcomeStyle.button}>
        sign up
      </Text>
      <Text>Already have an account?
        <Text
          onPress={() => navigation.navigate('welcome')}
          style={{ color: COLORS.main }}>
          Sign in
        </Text>
      </Text>

    </Template>
  )
}