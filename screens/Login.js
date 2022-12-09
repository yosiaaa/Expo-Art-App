import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Divider from "react-native-divider";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import LinkToLogin from "../components/LinkToLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setError] = useState({});

  const handleChange = (value, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleError = (errMessage, input) => {
    setError((prevState) => ({ ...prevState, [input]: errMessage }));
  };

  //validate
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

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
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setTimeout(async () => {
      let data = await AsyncStorage.getItem("userData");
      if (data) {
        let userData = JSON.parse(data);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          navigation.navigate("Home");
          AsyncStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, loggidIn: true })
          );
          console.log(inputs);
        } else {
          Alert.alert("Error", "User Data invalid");
        }
      } else {
        Alert.alert("Error", "User not found");
      }
    }, 2000);
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontFamily: "sans-serif",
            fontSize: 18,
            lineHeight: 24.51,
            letterSpacing: 1,
            color: "#595959",
            textTransform: "uppercase",
            marginBottom: 21,
            marginTop: 100,
          }}
        >
          Sign in with
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 51,
            marginBottom: 72,
          }}
        >
          <View style={{ marginRight: 20 }}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://img.icons8.com/fluency/48/null/facebook-new.png",
                }}
                style={{ width: 48, height: 48 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 20 }}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://img.icons8.com/sf-regular/48/null/mac-os.png",
                }}
                style={{ width: 48, height: 48 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 20 }}>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/null/google-logo.png",
                }}
                style={{ width: 48, height: 48 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://img.icons8.com/fluency/48/null/twitter.png",
                }}
                style={{ width: 48, height: 48 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Divider orientation="center" borderColor="#CBC0C0">
          Or
        </Divider>

        <CustomInput
          label="Email"
          placeholder="Enter your email"
          error={errors.email}
          onFocus={() => {
            handleError(null, "email");
          }}
          onChangeText={(value) => handleChange(value, "email")}
        />
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          password
          error={errors.password}
          onFocus={() => {
            handleError(null, "password");
          }}
          onChangeText={(value) => handleChange(value, "password")}
        />
        <CustomButton label="Sign In" onPress={validate} />
        <LinkToLogin navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Login;
