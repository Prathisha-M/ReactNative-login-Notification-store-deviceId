import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { stackStyles } from '../styles/AppStyles'; 
import HomeScreen from './HomeScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerStyle: stackStyles.header,
            headerTintColor: stackStyles.headerTitle.color,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: stackStyles.header,
            headerTintColor: stackStyles.headerTitle.color,
          }}
          />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerStyle: stackStyles.header,
            headerTintColor: stackStyles.headerTitle.color,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerStyle: stackStyles.header,
            headerTintColor: stackStyles.headerTitle.color,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
