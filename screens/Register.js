import { View, Keyboard, Alert } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import LinkToRegister from "../components/LinkToRegister";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (value, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleError = (errMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errMessage }));
  };

  //validate
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.fullname) {
      handleError("Name cannot be blank", "fullname");
      isValid = false;
    }

    if (!inputs.email) {
      handleError("Email cannot be blank", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Invalid email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Password cannot be blank", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Password must be at least 6 characters", "password");
      isValid = false;
    }

    if (!inputs.repassword) {
      handleError("Password cannot be blank", "repassword");
      isValid = false;
    } else if (inputs.repassword.length < 5) {
      handleError("Password must be at least 6 characters", "repassword");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setTimeout(() => {
      try {
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('Splash');
        console.log(inputs);
      } catch(e) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 2000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
            flex: 1,
            paddingVertical: 20,
          }}
        >
          <CustomInput 
            label="Fullname" 
            placeholder="Enter Full Name" 
            error={errors.fullname} 
            onFocus={() => {handleError(null, 'fullname');}} 
            onChangeText={value => handleChange(value, 'fullname')}
            />
          <CustomInput 
            label="Email" 
            placeholder="Enter Your Email" 
            error={errors.email} 
            onFocus={() => {handleError(null, 'email');}} 
            onChangeText={value => handleChange(value, 'email')}
            />
          <CustomInput 
            label="Password" 
            placeholder="Enter Password" 
            password 
            error={errors.password} 
            onFocus={() => {handleError(null, 'password');}} 
            onChangeText={value => handleChange(value, 'password')}/>
          <CustomInput
            label="Repeat Password"
            placeholder="Enter Password"
            password
            error={errors.repassword} 
            onFocus={() => {handleError(null, 'repassword');}} 
            onChangeText={value => handleChange(value, 'repassword')}
          />

          <CustomButton label="Create an account" onPress={validate}/>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LinkToRegister navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
