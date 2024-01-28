import {View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image} from 'react-native';
import { useCustomFonts } from "../utils/CustomFonts";
import { Ionicons } from "@expo/vector-icons";



import { useState } from 'react';


function LoginPage ({setLoggedIn}) {
    const fontsLoaded = useCustomFonts();
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (!fontsLoaded) {
      return null;
    }

    // temporary sign in
    const signIn = () => {
      if (email.length > 0 && password.length > 0) {
        setLoggedIn(true)
      }
    }

    return (
      <View style={styles.l_container}>
          <View style={styles.l_box}>
        <View style={{alignItems: 'center'}}>
        <Image 
            source={require('../../assets/Logo.png')}
        />
        </View>
        <View style={{height: 350, justifyContent:'space-between'}}>
            <Text style={styles.l_text_top}>Login</Text>
            <Text style={styles.l_text_bot}>Please sign in to continue</Text>
            <TextInput
              style={styles.l_input}
              placeholder="email"
              onChangeText={(e) => setEmail(e)}
              value={email}
            />
            <TextInput
              style={styles.l_input}
              placeholder="password"
              onChangeText={(p) => setPassword(p)}
              secureTextEntry
              value={password}
            />
            <View style={styles.l_checkbox}>
              <Pressable
                style={[styles.checkbox, isChecked && styles.l_checked]}
                onPress={() => setChecked(!isChecked)}
              >
                {isChecked && (
                  <Ionicons name="checkmark" size={18} color="white" />
                )}
              </Pressable>
              <Text style={styles.l_rememberme}>
                Remember me
              </Text>
            </View>
            <TouchableOpacity style={styles.l_button} onPress={() => signIn()} disabled={!email && !password}>
              <View>
                <Text style={{ color: "white" }}>Sign in</Text>
              </View>
            </TouchableOpacity>
        </View>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
  l_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    padding: 15,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
});



export default LoginPage;