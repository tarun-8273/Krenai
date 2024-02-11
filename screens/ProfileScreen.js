import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomTextInput from './CustomTextInput';

const ProfileScreen = () => {
  const LoginSchema = Yup.object().shape({
    number: Yup.string()
      .min(10, 'Must be exactly 10 digits')
      .max(10, 'Must be exactly 10 digits')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .required('Please enter your mobile number.'),
    password: Yup.string().min(8).required('Please enter your password.'),
  });

  const handleLogin = values => {
    console.log('Login button pressed');
    console.log('Tarun');
    Alert.alert('Alert');
  };

  return (
    <Formik
      initialValues={{number: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={values => {
        console.log('Form submitted:', values);
        handleLogin(values);
    }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Log In</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>User Name Or Mobile Number</Text>
              <CustomTextInput
                onChangeText={handleChange('number')}
                onBlur={handleBlur('number')}
                value={values.number}
              />
              {errors.number && touched.number && (
                <Text style={styles.errorText}>{errors.number}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <CustomTextInput
                imageSecond
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity style={{marginTop: 12}}>
              <Text style={styles.forgetPassword}>Forget Password?</Text>
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleSubmit}>
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.signUpContainer}>
                <Text style={styles.dontText}>Don't have an account?</Text>
                <TouchableOpacity style={{marginLeft: 8}}>
                  <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E04A2A',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 24,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#000000',
  },
  inputContainer: {
    marginTop: 10,
  },
  inputLabel: {
    // your styles for input label
  },
  forgetPassword: {
    alignSelf: 'flex-end',
    borderBottomWidth: 1,
    width: 120,
    color: '#2AE033',
    borderBottomColor: '#2AE033',
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#2AE033',
    marginTop: 20,
    paddingVertical: 12,
    width: 300,
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: '#2AE033',
    borderBottomWidth: 1,
    borderBottomColor: '#2AE033',
  },
  dontText: {
    fontSize: 16,
    color: '#000000',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default ProfileScreen;
