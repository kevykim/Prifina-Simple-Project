import {Text, View, StyleSheet, ScrollView, TextInput, ImageBackground, Image, TouchableOpacity, Alert} from 'react-native';
import { useCustomFonts } from '../utils/CustomFonts';

import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState } from 'react';


import background from "../../assets/background.png";
import ProfileAvatar from '../../assets/icons/Profile/ProfileAvatar.png'
import dog from '../../assets/icons/Pets/dog.jpg'
import { FontAwesome } from "@expo/vector-icons";

import Swipeable from "react-native-gesture-handler/Swipeable";
import complete from '../../assets/icons/reminder_icons/complete.png'
import edit from '../../assets/icons/reminder_icons/edit.png'

function Reminders () {

  const todayDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

    const fontsLoaded = useCustomFonts();
    const [selected, setSelected] = useState("");
    const [date, setDate] = useState(todayDate)

    if (!fontsLoaded) {
        return null;
    }
    
    const onPress = () => {

    }

      const renderRightActions = () => {

        return (
         <View style={styles.swipe_container}>
          <TouchableOpacity onPress={() => Alert.alert('Edit')}>
            <Image style={styles.orange_button} source={edit}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Complete')}>
            <Image style={styles.green_button} source={complete}/>
          </TouchableOpacity>

         </View>
        );
      };

    return (
      <ScrollView contentContainerStyle={styles.main}>
        <ImageBackground source={background} style={styles.img_style}>
          <View style={styles.header_container}>
            <Text style={styles.header}>Reminders</Text>
            <Image source={ProfileAvatar}></Image>
          </View>

          <Calendar
            style={styles.calendar}
            theme={{
              arrowColor: "black",
              textSectionTitleColor: "#B0B7C1",
              selectedDayBackgroundColor: "#F7945E",
              todayTextColor: "#F7945E",
              textDayFontFamily: "Lato-Reg",
              textMonthFontFamily: "Lato-Bold",
              textDayHeaderFontFamily: "Lato-Reg",
              textMonthFontSize: 18,
              "stylesheet.calendar.header": {
                week: {
                  marginTop: 9,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderTopWidth: 1,
                  borderColor: "#CED2D8",
                  padding: 10,
                },
              },
            }}
            onDayPress={(day) => {
              setSelected(day.dateString);
              setDate(
                new Date(day.dateString).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              );
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
          />
          <View style={styles.date_container}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="paw" size={14} color="#F7945E" />
              <Text style={{ fontFamily: "Lato-Reg" }}> Today: </Text>
              <Text style={{ fontFamily: "Lato-Bold", color: "#F7945E" }}>
                {date}
              </Text>
            </View>
            <TouchableOpacity onPress={onPress}>
              <Text style={{ fontFamily: "Lato-Reg" }}>Edit</Text>
            </TouchableOpacity>
          </View>
          <TextInput placeholder="Add reminder"></TextInput>

          {/* MAP OUT ALL REMINDERS WITH VIEW */}
          <View style={styles.reminder_outer}>
            <View style={styles.reminder_container}>
              <Swipeable renderRightActions={renderRightActions}>
                <View style={styles.swipe_box}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image style={styles.pet_image} source={dog}></Image>
                    <Text style={{ fontFamily: "Lato-Reg", marginLeft: 10 }}>
                      {" "}
                      Reminders here
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: "Lato-Reg",
                      color: "#F7945E",
                      marginRight: 25,
                    }}
                  >
                    2:39PM
                  </Text>
                </View>
              </Swipeable>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
};


const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 326,
    marginTop: 45,
    height: 100,
    padding: 2,
  },
  header: {
    fontFamily: "Marvin",
    fontSize: 24,
  },
  textinput: {},
  calendar: {
    marginBottom: 5,
    marginTop: 5,
    width: 326,
    height: 352,
    borderColor: "#F7945E",
    borderWidth: 1,
    borderRadius: 7,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  img_style: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  },
  date_container: {
    marginTop: 35,
    marginBottom: 15,
    padding: 2,
    flexDirection: "row",
    width: 326,
    justifyContent: "space-between",
    alignItems: "center",
  },
  reminder_outer: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 326,
    height: 56,
    backgroundColor: "#fcf0e8",
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 15,
    shadowColor: "#F7945E",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    marginBottom: 100,
  },
  reminder_container: {
    padding: 10,
    width: 316,
    height: 46,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#F7BA9B",
    borderRadius: 15,
    backgroundColor: "white",
  },
  pet_image: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "#F7945E",
    borderRadius: 10,
    shadowColor: "#F7945E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  swipe_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 310,
  },
  swipe_container: {
    flexDirection: "row",
    width: 85,
  },

  orange_button: {
    height: 40,
    width: 40,
  },
  green_button: {
    height: 40,
    width: 40,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});



export default Reminders;