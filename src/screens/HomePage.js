import {View, ScrollView, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, Switch} from 'react-native'
import { useCustomFonts } from "../utils/CustomFonts";
import { useState } from 'react';

import background from '../../assets/background.png'
import ProfileAvatar from "../../assets/icons/Profile/ProfileAvatar.png";
import dog from '../../assets/icons/Pets/dog.jpg'

function HomePage () {

    const fontsLoaded = useCustomFonts();
      const [isEnabled, setIsEnabled] = useState(false);

    if (!fontsLoaded) {
        return null;
    }

    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
    };

    return (
      <ScrollView contentContainerStyle={styles.main}>
        <ImageBackground source={background} style={styles.img_style}>
          <View style={styles.header}>
            <View>
              <Text style={styles.header_font_top}>Welcome Back!</Text>
              <Text style={styles.header_font_bot}>TestUser</Text>
            </View>
            <Image source={ProfileAvatar}></Image>
          </View>

          <View>{/* map pet profile cards */}</View>

          <View style={styles.task_header}>
            <Text style={styles.all_header_text}>Tasks</Text>
            <TouchableOpacity>
              <View>
                <Text style={{ fontFamily: "Lato-Bold", color: "#F7945E" }}>
                  See more
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.task_outer}>
            <View style={styles.task_container}>
              <View style={styles.task_text}>
                <Text style={{ fontFamily: "Lato-Bold" }}>3</Text>
                <Text style={{ fontFamily: "Lato-Bold", color: "#F7945E" }}>
                  {" "}
                  NEW{" "}
                </Text>
                <Text style={{ fontFamily: "Lato-Bold" }}>tasks for </Text>
                <Text style={{ fontFamily: "Lato-Bold" }}>
                  {new Date().toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </View>
              <TouchableOpacity>
                <View style={styles.task_button}>
                  <Text
                    style={{
                      fontFamily: "Marvin",
                      color: "white",
                      fontSize: 16,
                    }}
                  >
                    Check Schedule
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.reminders_header_container}>
              <Text style={styles.all_header_text}>Reminders</Text>
              <Text></Text>
            </View>
          </View>

          {/* MAP OUT ALL REMINDERS */}
          <View style={styles.reminder_outer}>
            <View style={styles.reminder_container}>
              <Image style={styles.pet_image} source={dog}></Image>
              <View>
                <Text style={styles.reminder_text_top}>Bathroom Break</Text>
                <Text style={styles.reminder_text_bottom}>At 2:30</Text>
              </View>
              <Switch
                trackColor={{ false: "#767577", true: "#F7945E" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              ></Switch>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img_style: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 65,
    width: 326,
    padding: 2,
    height: 100,
  },
  header_font_top: {
    fontFamily: "Lato-Reg",
    marginBottom: 3,
  },
  header_font_bot: {
    fontFamily: "Marvin",
    marginTop: 3,
    fontSize: 23,
  },
  task_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
    alignItems: "center",
    width: 326,
    marginTop: 12,
    marginBottom: 12,
  },
  all_header_text: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
  },
  task_outer: {
    alignItems: "center",
    justifyContent: "center",
    width: 326,
    height: 140,
    backgroundColor: "#fcf0e8",
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 25,
    shadowColor: "#F7945E",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  task_container: {
    justifyContent: "space-between",
    padding: 2,
    width: 310,
    height: 125,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 25,
  },
  task_text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  task_button: {
    backgroundColor: "#F7945E",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  reminders_header_container: {
    flexDirection: "row",
    width: 326,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 12,
    padding: 2,
  },
  reminder_outer: {
    alignItems: "center",
    justifyContent: "center",
    width: 326,
    height: 95,
    backgroundColor: "#fcf0e8",
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 25,
    shadowColor: "#F7945E",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  reminder_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    width: 310,
    height: 80,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 25,
  },
  reminder_text_top: {
    fontFamily: 'Lato-Reg'
  },
  reminder_text_bottom: {
    fontFamily: 'Lato-Reg',
    fontSize: 24,
    padding: 5
  },
  pet_image: {
    height: 60,
    width: 60,
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 10,
    shadowColor: "#F7945E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});



export default HomePage;