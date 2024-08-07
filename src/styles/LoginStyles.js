import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    width: 280,
    height: 200,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
  },
  innerContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  welcome: {
    color: '#C23A8A',
    fontSize: 33,
    marginTop: 20,
    marginBottom: 10,
  },
  stud: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    position: 'absolute',
    left: 10,
    marginLeft: 330,
  },
  input: {
    height: 50,
    borderColor: '#888',
    borderBottomWidth: 1,
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#C23A8A',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#C23A8A',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  orContinueText: {
    color: 'white',
    fontSize: 16,
    marginVertical: 20,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  socialIcon: {
    padding: 10,
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
  },
  signUpButton: {
    color: '#C23A8A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;