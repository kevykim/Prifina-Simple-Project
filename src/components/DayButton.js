import {View, Text, StyleSheet, Image, TouchableOpacity, Switch} from 'react-native'

import { useState } from "react";
import { useFakeDatabase } from '../../context/FakeDataBase';
import orange from "../../assets/icons/misc/orange.png";
import check from "../../assets/icons/misc/check.png";


const DayButton = ({ day, initialState, remindersByDay, pet }) => {
    const { database, updateCompleted } =
    useFakeDatabase();

    const monday = remindersByDay['Mo']
    const tuesday = remindersByDay['Tu']
    const wednesday = remindersByDay['We']
    const thursday = remindersByDay['Th']
    const friday = remindersByDay['Fr']
    const saturday = remindersByDay['Sa']
    const sunday = remindersByDay['Su']

    const m = remindersByDay['Mo'][0].date
    const t = remindersByDay['Tu'][0].date
    const w = remindersByDay['We'][0].date
    const th = remindersByDay['Th'][0].date
    const f = remindersByDay['Fr'][0].date
    const sa = remindersByDay["Sa"][0].date;
    const su = remindersByDay["Su"][0].date;

  const [checkedImg, setCheckedImg] = useState(initialState);

  const handlePress = () => {
    setCheckedImg((current) => (current === check ? orange : check));
    updateCompleted(day === 'Mo' ? m : day === 'Tu' ? t : day === 'We' ? w : day === 'Th' ? th : day === 'Fr' ? f : day === 'Sa' ? sa : su, pet)
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
            <Text style={{ fontFamily: "Lato-Reg", color: "white" }}>{day === 'Mo' ? monday.length : day === 'Tu' ? tuesday.length : day === 'We' ? wednesday.length : day === 'Th' ? thursday.length : day === 'Fr' ? friday.length : day === 'Sa' ? saturday.length : sunday.length}</Text>
          ) : (
            <Text></Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};



export default DayButton