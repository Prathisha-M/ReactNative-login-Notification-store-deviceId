import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 290,
  
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcome: {
    color: '#C23A8A',
    fontSize: 33,
    marginLeft: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  stud: {
    fontSize: 18,
    marginLeft: 10,
    // marginTop: ,
    color: 'white',
  },
  cen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 120,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#C23A8A',
    padding: 15,
    width: '80%',
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  versionText: {
    fontSize: 15,
    color: '#888',
    marginBottom: 30,
  },
});

export default styles;
