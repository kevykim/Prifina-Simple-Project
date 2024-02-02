import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import RNPickerSelect from "react-native-picker-select";
const moment = require("moment");

import { useFakeDatabase } from "../../context/FakeDataBase";
import { useCustomFonts } from "../utils/CustomFonts";

import DateTimePicker from "@react-native-community/datetimepicker";
import { useState, useRef } from "react";



const AddReminderModal = ({modalShown, closeModal}) => {
    const { database, addReminder, deleteReminder, completeReminder } =
      useFakeDatabase();

    const fontsLoaded = useCustomFonts();
    if (!fontsLoaded) {
      return null;
    }

      const tDay = new Date();
      const tTime = new Date();

      const [petId, setPetId] = useState("");
      const [message, setMessage] = useState("");
      const [time, setTime] = useState(tTime)
      const [date, setDate] = useState(tDay)

      const onTimeChange = (event, selectedDate) => {
        if (event.type === "set") {
          const currentDate = selectedDate 

          // toggleTimePicker();
          setTime(currentDate);
        }
      };

      const onDateChange = (event, selectedDate) => {
        if (event.type === "set") {
          const thisDate = selectedDate;

          setDate(thisDate);
        }
      };

     const addingReminder = () => {
       const dateObject = new Date(time);

       const changeTime = dateObject.toLocaleTimeString("en-US", {
         hour: "numeric",
         minute: "2-digit",
         hour12: true,
       });

       const newDateObject = new Date(date);

       const changeDate = newDateObject.toLocaleDateString("en-US", {
         year: "numeric",
         month: "numeric",
         day: "numeric",
       });

       addReminder({petId, message, time : changeTime, date : changeDate});
       closeModal();
     };


    return (
      <Modal visible={modalShown} transparent animationType="slide">
        <View style={styles.modal_container}>
          <View style={styles.modal_outer}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modal_inner}>
                  <Text style={styles.modal_header}>Add a reminder!</Text>
                  <View style={styles.modal_input}>
                    <RNPickerSelect
                      placeholder={{
                        label: "Select your pet.....",
                        value: null,
                        color: "black",
                      }}
                      onValueChange={(value) => setPetId(value)}
                      style={{ fontSize: 25 }}
                      items={[
                        { label: "Coco", value: "1" },
                        { label: "Buddy", value: "2" },
                        { label: "Noodle", value: "3" },
                      ]}
                    />
                  </View>
                  <TextInput
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      secondInputRef.current.focus();
                    }}
                    placeholder="message"
                    style={styles.modal_input}
                    value={message}
                    onChangeText={(m) => setMessage(m)}
                  />

                  <View style={styles.modal_picker_input}>
                    <DateTimePicker
                      value={time}
                      mode={"time"}
                      display="spinner"
                      style={{
                        // backgroundColor: "#fcf0e8",
                        width: 280,
                        height: 100,
                      }}
                      onChange={onTimeChange}
                    />
                  </View>

                  <View style={styles.modal_picker_input}>
                    <DateTimePicker
                      value={date}
                      mode={"date"}
                      display="spinner"
                      style={{
                        // backgroundColor: "#fcf0e8",
                        width: 280,
                        height: 100,
                      }}
                      onChange={onDateChange}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      width: 130,
                      justifyContent: "space-between",
                      marginLeft: 150,
                    }}
                  >
                    <TouchableOpacity
                      style={styles.close_button}
                      onPress={closeModal}
                    >
                      <Text style={styles.close_buttontext}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.submit_button}
                      onPress={addingReminder}
                    >
                      <Text style={styles.submit_buttontext}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </View>
        </View>
      </Modal>
    );
}


const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal_outer: {
    backgroundColor: "white",
    height: 450,
    width: 326,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 15,
    shadowColor: "#F7945E",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  modal_inner: {
    padding: 10,
    width: 316,
    height: 440,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#F7BA9B",
    borderRadius: 15,
    backgroundColor: "#fcf0e8",
  },
  modal_header: {
    fontFamily: "Marvin",
    fontSize: 22,
  },
  modal_input: {
    backgroundColor: "white",
    width: 288,
    height: 45,
    borderRadius: 25,
    padding: 15,
    paddingLeft: 20,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    fontFamily: "Lato-Reg",
  },
  modal_picker_input: {
    backgroundColor: "white",
    width: 288,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderRadius: 25,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    fontFamily: "Lato-Light",
  },
  submit_button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#F7945E",
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  submit_buttontext: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
  close_button: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#B0B7C1",
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  close_buttontext: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
});





export default AddReminderModal