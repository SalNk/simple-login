import { View, Text, TextInput, Button, Pressable } from 'react-native'
import Template from './Template'
import welcomeStyle from './style'
import { COLORS } from '../outils/constants'
import { useForm, Controller } from "react-hook-form"
import axios from 'axios'
import IconReturn from './IconReturn'

export default function LoginScreen({ navigation }) {

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

  const getConnect = data => {
    axios.post("https://shop.archi-tech.site/api/login", {
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
      <Text style={welcomeStyle.title}>Welcome back</Text>

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
      <Text style={{ color: 'red' }}> {errors.email && <Text>Veuillez saisir votre adresse mail</Text>}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="password"
        type="password"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={welcomeStyle.input}
            placeholder='Password'
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )} />
      <Text style={{ color: 'red' }}> {errors.password && <Text>Veuillez saisir votre mot de passe</Text>}</Text>

      <View
        style={welcomeStyle.absolute}
      >
        <Text
          onPress={() => navigation.navigate('reset')}>
          Forget your password?
        </Text>
      </View>

      <Pressable
        onPress={handleSubmit(getConnect)}
        style={welcomeStyle.button}>
        <Text style={{ color: 'white', textTransform: 'uppercase' }}>login</Text>
      </Pressable>

      <Pressable style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>Don't have an account?</Text>
        <Text
          onPress={() => navigation.navigate('signup')}
          style={{ color: COLORS.main }}
        >
          Sign up
        </Text>
      </Pressable>

    </Template>
  )
}