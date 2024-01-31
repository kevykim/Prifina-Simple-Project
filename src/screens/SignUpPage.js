import {View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import { useCustomFonts } from "../utils/CustomFonts";
import { Ionicons } from "@expo/vector-icons";
import background from '../../assets/background.png'

import passicon from '../../assets/icons/misc/passicon.png'
import emailicon from '../../assets/icons/misc/emailicon.png'


import { useState, useEffect, useRef } from 'react';



function SignUpPage ({navigation}) {

      const secondInputRef = useRef(null);
      const thirdInputRef = useRef(null);

    const fontsLoaded = useCustomFonts();
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [submitted, setSubmitted] = useState(false)


    // useEffect(() => {
    //   let errorMessage = []
    //   if (!email.includes('@')) {
    //     errorMessage.push('Invalid email')
    //   }

    //   if (!password) {
    //     errorMessage.push('Please enter your password')
    //   }

    //   setErrors(errorMessage)

    // }, [email, password])


    if (!fontsLoaded) {
      return null;
    }


    // temporary sign in
    const signUp = () => {
  let errorMessage = [];

  if (!email.includes('@')) {
    errorMessage.push('Invalid email');
  }

  if (!password) {
    errorMessage.push('Please enter your password');
  }

  if (password !== confirmpassword) {
    errorMessage.push('Passwords must match')
  }

  setErrors(errorMessage);

  if (email.length > 0 && password.length > 0 && errorMessage.length === 0) {
    navigation.navigate("LoginPage")
  }

  setSubmitted(!submitted);
};

    return (
      <View style={styles.s_container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.s_keyboardAvoidingView}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground style={styles.s_background} source={background}>
              <View style={styles.s_box}>
                <View style={{ alignItems: "center" }}>
                  <Image source={require("../../assets/Logo.png")} />
                </View>
                <View style={{ height: 350, justifyContent: "space-between" }}>
                  <Text style={styles.s_text_top}>Sign up</Text>
                  <Text style={styles.s_text_bot}>
                    Please sign up to continue
                  </Text>
                  <View>
                    <TextInput
                      style={styles.s_input}
                      placeholder="email"
                      onChangeText={(e) => setEmail(e)}
                      value={email}
                      keyboardType="email-address"
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        secondInputRef.current.focus();
                      }}
                    />
                    <Image style={styles.s_input_icon_e} source={emailicon} />
                    <View style={{ height: 20, marginLeft: 15 }}>
                      {errors.length && submitted ? (
                        <Text style={styles.errortext}>{"Invalid Email"}</Text>
                      ) : (
                        <Text></Text>
                      )}
                    </View>
                  </View>
                  <View>
                    <TextInput
                      ref={secondInputRef}
                      style={styles.s_input}
                      placeholder={"password"}
                      onChangeText={(p) => setPassword(p)}
                      secureTextEntry
                      value={password}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        thirdInputRefInputRef.current.focus();
                      }}
                    />
                    <Image style={styles.s_input_icon_p} source={passicon} />
                    <View style={{ height: 20, marginLeft: 15 }}>
                      {errors.length && submitted ? (
                        <Text style={styles.errortext}>
                          {"Please enter your password"}
                        </Text>
                      ) : (
                        <Text></Text>
                      )}
                    </View>
                  </View>
                  <View>
                    <TextInput
                      ref={thirdInputRef}
                      style={styles.s_input}
                      placeholder={"confirm password"}
                      onChangeText={(p) => setConfirmPassword(p)}
                      secureTextEntry
                      value={confirmpassword}
                      returnKeyType="done"
                      onSubmitEditing={() => {
                        signUp();
                        Keyboard.dismiss();
                      }}
                    />
                    <Image style={styles.s_input_icon_p} source={passicon} />
                    <View style={{ height: 20, marginLeft: 15 }}>
                      {errors.length && submitted ? (
                        <Text style={styles.errortext}>
                          {"Passwords must match"}
                        </Text>
                      ) : (
                        <Text></Text>
                      )}
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.s_button}
                    onPress={() => signUp()}
                  >
                    <View>
                      <Text style={{ color: "white" }}>Sign Up</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
};


export default SignUpPage;



const styles = StyleSheet.create({
  s_keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  s_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  s_background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  s_box: {
    justifyContent: "space-around",
    height: 600,
  },
  s_text_top: {
    fontFamily: "Lato-Reg",
    fontSize: 36,
  },
  s_text_bot: {
    fontFamily: "Lato-Reg",
    marginBottom: 20,
  },
  s_input: {
    backgroundColor: "white",
    width: 288,
    height: 45,
    borderRadius: 25,
    marginBottom: 5,
    paddingLeft: 45,
    padding: 15,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  s_input_icon_e: {
    position: "absolute",
    top: 15,
    left: 18,
  },
  s_input_icon_p: {
    position: "absolute",
    top: 13,
    left: 22,
  },
  s_checkbox: {
    fontFamily: "Lato-Reg",
    flexDirection: "row",
    marginLeft: 150,
    width: 135,
    justifyContent: "space-between",
    alignItems: "center",
    color: "green",
    marginTop: 15,
  },
  checkbox: {
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "green",
    backgroundColor: "transparent",
  },
  s_checked: {
    backgroundColor: "green",
  },
  s_button: {
    backgroundColor: "#F7945E",
    width: 104,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 15,
    padding: 5,
    marginLeft: 180,
  },
  s_rememberme: {
    color: "green",
    fontSize: 16,
  },
  errortext: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    color: "red",
  },
});