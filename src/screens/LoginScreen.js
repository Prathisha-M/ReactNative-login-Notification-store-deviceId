import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/LoginStyles';
import Login from '../assets/Login.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import DeviceInfo from 'react-native-device-info';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.29.24:3000/verify-user', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        if (result.registered) {
          const deviceId = await DeviceInfo.getUniqueId(); 
          console.log('Device ID:', deviceId);
          const deviceName = await DeviceInfo.getDeviceName();
          await saveDeviceInfo(deviceId, deviceName); 
  
          navigation.navigate('Welcome', { name: username});
        } else {
          Alert.alert('Login Failed', 'Username or password is incorrect.');
        }
      } else {
        Alert.alert('Login Failed', 'Username or password is incorrect.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'An error occurred while trying to log in.');
    }
  };
  
  
  const saveDeviceInfo = async (deviceId, deviceName) => {
    try {
      console.log('Saving device info:');
    console.log('Device ID:', deviceId);
    console.log('Device Name:', deviceName);
      const response = await fetch('http://192.168.29.24:3000/save-device-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          deviceId,
          deviceName,
        }),
      });
  
      if (response.ok) {
        console.log('Device info saved successfully.');
      } else {
        console.error('Failed to save device info.');
      }
    } catch (error) {
      console.error('Error saving device info:', error);
    }
  };
  

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.innerContainer}>
        <Image source={Login} style={styles.image} />
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.stud}>Login to Your Account</Text>
        
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#888" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orContinueText}>or continue with</Text>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIcon}>
            <Icon name="google" size={30} color="#0F9D58" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Icon name="facebook" size={30} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Icon name="apple" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.signUpContainer}>
          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpButton}>Sign Up</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
























// import React, { useState } from 'react';
// import { View, Image, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import styles from '../styles/LoginStyles';
// import Login from '../assets/Login.png';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigation = useNavigation(); 

//   const navigateToRegister = () => {
//     navigation.navigate('Register'); 
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://192.168.29.43:3000/verify-user', { 
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         if (result.registered) {
//           // Alert.alert('Login Successful', 'You have successfully logged in.');
//           navigation.navigate('Welcome'); 
//         } else {
//           Alert.alert('Login Failed', 'Username or password is incorrect.');
//         }
//       } else {
//         Alert.alert('Login Failed', 'Username or password is incorrect.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       Alert.alert('Error', 'An error occurred while trying to log in.');
//     }
//   };

//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={styles.contentContainer}
//     >
//       <View style={styles.innerContainer}>
//         <Image source={Login} style={styles.image} />
//         <Text style={styles.welcome}>Welcome Back</Text>
//         <Text style={styles.stud}>Login to Your Account</Text>
        
//         <View style={styles.inputContainer}>
//           <Icon name="user" size={20} color="#888" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Username"
//             placeholderTextColor="#888"
//             value={username}
//             onChangeText={setUsername}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Icon name="lock" size={20} color="#888" style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             placeholderTextColor="#888"
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />
//         </View>
        
//         <TouchableOpacity style={styles.forgotPassword}>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <Text style={styles.orContinueText}>or continue with</Text>

//         <View style={styles.socialIconsContainer}>
//           <TouchableOpacity style={styles.socialIcon}>
//             <Icon name="google" size={30} color="#0F9D58" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.socialIcon}>
//             <Icon name="facebook" size={30} color="#4267B2" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.socialIcon}>
//             <Icon name="apple" size={30} color="#fff" />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.signUpContainer}>
//           <TouchableOpacity onPress={navigateToRegister}>
//             <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpButton}>Sign Up</Text></Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default LoginScreen;