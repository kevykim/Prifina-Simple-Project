import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { useFakeDatabase } from "../../context/FakeDataBase";
import { useCustomFonts } from "../utils/CustomFonts";



function DeleteReminderModal ({modalShown, closeModal, reminderId}){
  const { database, deleteReminder } = useFakeDatabase();

  const fontsLoaded = useCustomFonts();
  if (!fontsLoaded) {
    return null;
  }

  const deleteAReminder = () => {
    deleteReminder(reminderId)
  closeModal();
  };

  return <Modal visible={modalShown} transparent animationType="slide">
        <View style={styles.modal_container}>
            <View style={styles.modal_outer}>
                <View style={styles.modal_inner}>
                    <Text style={styles.modal_header}>Are you sure you want to delete this reminder?</Text>
                    <Text style={{fontFamily: 'Lato-Bold', fontSize: 14}}>This will delete this reminder permanently. You cannot undo this action.</Text>
                    <View style={{flexDirection: 'row', width: 160, justifyContent: 'space-between', marginLeft: 120}}>
                    <TouchableOpacity onPress={closeModal} style={styles.close_button}>
                        <Text style={styles.close_buttontext}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteAReminder} style={styles.delete_button}>
                        <Text style={styles.delete_buttontext}>Confirm</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
  </Modal>;
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
    height: 250,
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
    height: 240,
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
  delete_button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#cf4943",
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  delete_buttontext: {
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



export default DeleteReminderModal