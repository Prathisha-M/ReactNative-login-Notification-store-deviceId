import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Team from '../assets/Team.png';

const WelcomeScreen = ({route}) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
        We're excited to have you on our team, 
      </Text>
      <Text style={styles.text2}>
      {name}!
      </Text>
      
      <Image source={Team} style={styles.image} />
      <Text style={styles.text1}>
      Welcome aboard!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black', 
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white', 
    fontSize: 20, 
    textAlign: 'center', 
    marginTop: 80, 
  },
  text1: {
    color: 'white', 
    fontSize: 20, 
    textAlign: 'center',
  },
  text2: {
    color: '#C23A8A', 
    fontSize: 20, 
    textAlign: 'center',
  },
  image: {
    width: 400, 
    height: 400,
    marginTop: 50, 
  },
});

export default WelcomeScreen;

