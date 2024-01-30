import {View, Text, StyleSheet, Image, TouchableOpacity, Switch} from 'react-native'

import { useState } from "react";

import orange from "../../assets/icons/misc/orange.png";
import check from "../../assets/icons/misc/check.png";


const DayButton = ({ day, initialState }) => {
  const [checkedImg, setCheckedImg] = useState(initialState);

  const handlePress = () => {
    setCheckedImg((current) => (current === check ? orange : check));
  };

  const todayDate = new Date().toDateString().substring(0, 2);


  return (
    <View style={{height: '100%'}}>
      <Text style={todayDate === day ? [{ color: "gray", fontFamily: 'Lato-Reg' }] : [{ color: "black", fontFamily: 'Lato-Reg' }]}>
        {day}
      </Text>
      <TouchableOpacity style={{marginTop: 7}} onPress={handlePress}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ position: "absolute", height: 25, width: 25 }}
            source={checkedImg}
          />

          {/* Check amount of reminders that day */}
          {checkedImg === orange ? (
            <Text style={{ fontFamily: "Lato-Reg", color: "white" }}>{Math.floor(Math.random() * 5) + 1}</Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};



export default DayButton