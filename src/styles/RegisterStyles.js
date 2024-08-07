import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  innerContainer: {
    padding: 20,
  },
  image: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: -30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: '#C23A8A',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  loginLink: {
    color: '#C23A8A',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: -10,
    marginBottom: 10,
    // textAlign: 'center',
  },
});

export default styles;
