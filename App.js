import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import ResetPasswordScreen from './src/screens/ResetPasswordScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import HomeScreen from './src/screens/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="reset" component={ResetPasswordScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
