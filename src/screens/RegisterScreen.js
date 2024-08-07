import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/RegisterStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sign from '../assets/Sign.png';
import DropdownComponent from './DropdownComponent';
import PushNotification from 'react-native-push-notification';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Phone, setPhone] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [course, setCourse] = useState(''); 
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: "your-channel-id",
        channelName: "My channel",
        channelDescription: "A channel to categorize your notifications",
        soundName: "default",
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createChannel returned '${created}'`) 
    );
  }, []);

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    if (value !== password) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
  
    setIsSubmitting(true);
    try {
      const response = await fetch('http://192.168.29.24:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, Phone, password, course }),
      });
  
      if (response.ok) {
        const result = await response.text();
        PushNotification.localNotification({
          channelId: "your-channel-id",
          title: "Registration Success", 
          message: "You have Registered successfully", 
        });
        navigation.navigate('Login');
      } else {
        const error = await response.text();
        setErrorMessage(error);
      }
    } catch (error) {
      console.error('Error registering:', error);
      setErrorMessage('Failed to register. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={Sign} style={styles.image} />
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Icon name="user" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#888"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Icon name="envelope" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          <DropdownComponent onSelectCourse={setCourse} /> 
          <View style={styles.inputWrapper}>
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
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
            />
          </View>
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          <View style={styles.inputWrapper}>
            <Icon name="phone" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={Phone} 
              onChangeText={setPhone}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleRegister}
          disabled={isSubmitting}
        >
          <Text style={styles.buttonText}>{isSubmitting ? 'Registering...' : 'Register'}</Text>
        </TouchableOpacity>

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <Text style={styles.orText}>or continue with</Text>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity>
            <Icon name="google" size={30} color="#0F9D58" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="facebook" size={30} color="#3b5998" style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="apple" size={30} color="#fff" style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
