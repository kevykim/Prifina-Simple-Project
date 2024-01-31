import {View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import { useCustomFonts } from "../utils/CustomFonts";
import { Ionicons } from "@expo/vector-icons";
import background from '../../assets/background.png'

import passicon from '../../assets/icons/misc/passicon.png'
import emailicon from '../../assets/icons/misc/emailicon.png'


import { useState, useEffect, useRef } from 'react';



function LoginPage ({navigation, setFakeLogin}) {

      const secondInputRef = useRef(null);

    const fontsLoaded = useCustomFonts();
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
    const signIn = () => {
  let errorMessage = [];

  if (!email.includes('@')) {
    errorMessage.push('Invalid email');
  }

  if (!password) {
    errorMessage.push('Please enter your password');
  }

  setErrors(errorMessage);

  if (email.length > 0 && password.length > 0 && errorMessage.length === 0) {
    setFakeLogin(true);
  }

  setSubmitted(!submitted);
};

    return (
      <View style={styles.l_container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.l_keyboardAvoidingView}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground style={styles.l_background} source={background}>
              <View style={styles.l_box}>
                <View style={{ alignItems: "center" }}>
                  <Image source={require("../../assets/Logo.png")} />
                </View>
                <View style={{ height: 350, justifyContent: "space-between" }}>
                  <Text style={styles.l_text_top}>Login</Text>
                  <Text style={styles.l_text_bot}>
                    Please sign in to continue
                  </Text>
                  <View>
                    <TextInput
                      style={styles.l_input}
                      placeholder="email"
                      onChangeText={(e) => setEmail(e)}
                      value={email}
                      keyboardType="email-address"
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        secondInputRef.current.focus();
                      }}
                    />
                    <Image style={styles.l_input_icon_e} source={emailicon} />
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
                      style={styles.l_input}
                      placeholder={"password"}
                      onChangeText={(p) => setPassword(p)}
                      secureTextEntry
                      value={password}
                      returnKeyType="done"
                      onSubmitEditing={() => {
                        signIn();
                        Keyboard.dismiss();
                      }}
                    />
                    <Image style={styles.l_input_icon_p} source={passicon} />
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
                  <View style={styles.l_checkbox}>
                    <Pressable
                      style={[styles.checkbox, isChecked && styles.l_checked]}
                      onPress={() => setChecked(!isChecked)}
                    >
                      {isChecked && (
                        <Ionicons name="checkmark" size={18} color="white" />
                      )}
                    </Pressable>
                    {/* <TouchableOpacity
                      onPress={() => navigation.navigate("SignUpPage")}
                    >
                      <Text>Sign up</Text>
                    </TouchableOpacity> */}
                    <Text style={styles.l_rememberme}>Remember me</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.l_button}
                    onPress={() => signIn()}
                  >
                    <View>
                      <Text style={{ color: "white" }}>Sign in</Text>
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

const styles = StyleSheet.create({
  l_keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  l_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  l_background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  l_box: {
    justifyContent: "space-around",
    height: 600,
  },
  l_text_top: {
    fontFamily: "Lato-Reg",
    fontSize: 36,
  },
  l_text_bot: {
    fontFamily: "Lato-Reg",
    marginBottom: 20,
  },
  l_input: {
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
  l_input_icon_e: {
    position: "absolute",
    top: 15,
    left: 18,
  },
  l_input_icon_p: {
    position: "absolute",
    top: 13,
    left: 22,
  },
  l_checkbox: {
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
  l_checked: {
    backgroundColor: "green",
  },
  l_button: {
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
  l_rememberme: {
    color: "green",
    fontSize: 16,
  },
  errortext: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    color: "red",
  },
});



export default LoginPage;