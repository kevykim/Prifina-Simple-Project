import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Pressable } from "react-native";

const moment = require("moment");


import { useState, useRef } from "react";
import { useFakeDatabase } from "../../context/FakeDataBase";
import { useCustomFonts } from "../utils/CustomFonts";

import DateTimePicker from "@react-native-community/datetimepicker";


const EditReminderModal = ({ modalShown, closeModal, reminderId, closeSwipeable }) => {
  const fontsLoaded = useCustomFonts();
  const secondInputRef = useRef(null);

  if (!fontsLoaded) {
    return null;
  }

  const { database, updateReminder } = useFakeDatabase();

  const findReminder = database.FakeUser.reminders[reminderId];
  const findPet = database.FakeUser.pets[findReminder.petId].name;

  const currentTime = findReminder.time;
  const currentDate = findReminder.date;


  const combinedDTString = `${currentDate} ${currentTime}`;


  const combinedDTMoment = moment(combinedDTString, "M/D/YYYY h:mm A");


  const combinedDT = combinedDTMoment.toDate();

  const [updatedMessage, setUpdatedMessage] = useState(findReminder.message);
  const [updatedTime, setUpdatedTime] = useState(combinedDT);
  const [updatedDate, setUpdatedDate] = useState(moment(currentDate, "M/D/YYYY").toDate());




  const onTimeChange = (event, selectedDate) => {
    if (event.type === "set") {
      const currentDate = selectedDate || currentTime;

        // toggleTimePicker();
      setUpdatedTime(currentDate);

    } 
  };

  const onDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
        const thisDate = selectedDate 

        setUpdatedDate(thisDate)
    }
  }

  const updatingReminders = () => {
      const dateObject = new Date(updatedTime);

    const updatingTime = dateObject.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    
    const newDateObject = new Date(updatedDate);

    const updatingDate = newDateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });



    updateReminder({reminderId,
      message: updatedMessage,
      time: updatingTime,
      petImg : findReminder.petImg,
      date: updatingDate
    });
    closeModal();
    closeSwipeable(reminderId);
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
                <Text style={styles.modal_header}>
                  Edit {findPet}'s Reminder!
                </Text>
                <TextInput
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    secondInputRef.current.focus();
                  }}
                  style={styles.modal_input}
                  value={updatedMessage}
                  onChangeText={(m) => setUpdatedMessage(m)}
                />

                  <View style={styles.modal_picker_input}>
                    <DateTimePicker
                      value={updatedTime}
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
                      value={updatedDate}
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
                    width: 200,
                    justifyContent: "space-between",
                    marginLeft: 80,
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
                    onPress={updatingReminders}
                  >
                    <Text style={styles.submit_buttontext}>Save Changes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal_outer: {
    backgroundColor: "white",
    height: 380,
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
    height: 370,
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

export default EditReminderModal;
