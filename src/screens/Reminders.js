import {Text, View, StyleSheet, ScrollView, TextInput, ImageBackground} from 'react-native';
import { useCustomFonts } from '../utils/CustomFonts';

import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState } from 'react';


import background from "../../assets/background.png";


function Reminders () {

    const fontsLoaded = useCustomFonts();
    const [selected, setSelected] = useState("");

    if (!fontsLoaded) {
        return null;
    }
    



    return (
      <ScrollView contentContainerStyle={styles.main}>
        <ImageBackground source={background} style={styles.img_style}>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            width: 300,
          }}
          >
          <Text style={styles.header}>Reminders</Text>
          <Text>profileasdfasdf</Text>
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
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
            },
          }}
          />

        <TextInput placeholder="Add reminder"></TextInput>
        <View style={styles.main}></View>
          </ImageBackground>

      </ScrollView>
    );
};


const styles = StyleSheet.create({
  main: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    padding: 20,
    marginTop: 75,
    borderWidth: 1,
    fontFamily: "Marvin",
    borderColor: "red",
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
    width: '100%',
    alignItems: 'center',
  }
});



export default Reminders;