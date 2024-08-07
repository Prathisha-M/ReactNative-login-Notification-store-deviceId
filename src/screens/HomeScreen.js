import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entry from '../assets/Entry.png';
import styles from '../styles/HomeStyles';
import DeviceInfo from 'react-native-device-info';
import PushNotification from "react-native-push-notification";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    const fetchVersion = async () => {
      const version = await DeviceInfo.getVersion();
      setAppVersion(version);
    };

    fetchVersion();
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

  return (
    <View style={styles.container}>
      <View>
        <Image source={Entry} style={styles.image} />
        <View>
          <View style={styles.cen}>
            <Text style={styles.welcome}>Welcome to</Text>
            <Text style={styles.stud}>Student Portal</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Register');

                // Trigger a local notification
                PushNotification.localNotification({
                  channelId: "your-channel-id",
                  title: "Sign Up Successful", 
                  message: "You have successfully signed up!", 
                  
                });
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.versionText}>Version {appVersion}</Text>
    </View>
  );
};

export default HomeScreen;
