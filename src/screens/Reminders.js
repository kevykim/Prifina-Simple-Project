import {Text, View, StyleSheet, ScrollView, TextInput, ImageBackground, Image, TouchableOpacity, Alert} from 'react-native';
import RNPickerSelect from "react-native-picker-select";

import { useCustomFonts } from '../utils/CustomFonts';

import { Calendar, LocaleConfig } from "react-native-calendars";
import { useState, useRef } from 'react';

import EditReminderModal from '../components/EditReminderModal';
import AddReminderModal from '../components/AddReminderModal';

import background from "../../assets/background.png";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useFakeDatabase } from '../../context/FakeDataBase';

import Swipeable from "react-native-gesture-handler/Swipeable";
import complete from '../../assets/icons/reminder_icons/complete.png';
import edit from '../../assets/icons/reminder_icons/edit.png';
import deleteicon from '../../assets/icons/reminder_icons/delete.png';
import DeleteReminderModal from '../components/DeleteReminderModal';

function Reminders () {
    const { database, completeReminder } =
      useFakeDatabase();

      const swipeableRefs = useRef(null);

      
      const todayDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      
      const reminderDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      
      const fontsLoaded = useCustomFonts();
      const [selected, setSelected] = useState("");
      const [date, setDate] = useState(todayDate)
      const [currentDate, setCurrentDate] = useState(reminderDate)
      
      
      const currentReminders = Object.values(database.FakeUser.reminders).filter(reminder => reminder.date === currentDate && reminder.completed === false)
      
      
      // const [reminderInput, setReminderInput] = useState(false)

      const [showEditRModal, setShowEditRModal] = useState(false)
      const [showAddRModal, setShowAddRModal] = useState(false)
      const [showDeleteRModal, setShowDeleteRModal] = useState(false)

      const [reminderId, setReminderId] = useState()


    if (!fontsLoaded) {
        return null;
    }

     const closeSwipeable = (id) => {
       if (swipeableRefs[id]) {
         swipeableRefs[id].close();
       }
     };
    
    // const showReminder = () => {
    //   setReminderInput(!reminderInput)
    // }

    // const addingReminder = () => {
    //   addReminder(petId, message, time, currentDate )
    // }

    
    const openEditRModal = (reminder) => {
      setReminderId(reminder)
       setShowEditRModal(!showEditRModal)
    }

    const openAddRModal = () => {
      setShowAddRModal(!showAddRModal)
    }

    const openDeleteRModal = (reminder) => {
      setReminderId(reminder);
      setShowDeleteRModal(!showDeleteRModal)
    }

    const completeAReminder = (reminderId) => {
      completeReminder(reminderId)
    }

    // const deleteAReminder = (reminderId) => {
    //   deleteReminder(reminderId)
    // };

      // const renderRightActions = () => {

      //   return (
      //    <View style={styles.swipe_container}>
      //     <TouchableOpacity onPress={editReminder}>
      //       <Image style={styles.orange_button} source={edit}/>
      //     </TouchableOpacity>
      //     <TouchableOpacity onPress={completeReminder}>
      //       <Image style={styles.green_button} source={complete}/>
      //     </TouchableOpacity>

      //    </View>
      //   );
      // };
      // const renderLeftActions = () => {
      //   return (
      //     <View style={styles.swipe_container_l}>
      //       <TouchableOpacity onPress={() => deleteAReminder}>
      //         <Image style={styles.red_button} source={deleteicon} />
      //       </TouchableOpacity>
      //     </View>
      //   );
      // };

    return (
      <ScrollView contentContainerStyle={styles.main}>
        <ImageBackground source={background} style={styles.img_style}>
          <View style={styles.header_container}>
            <Text style={styles.header}>Reminders</Text>
            <Image source={database.FakeUser.userinfo.profileImg}></Image>
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

              const month = day.month;
              const today = day.day;
              const year = day.year;

              const currentDate = `${month}/${today}/${year}`;

              const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];

              let monthName = months[month - 1];

              setDate(`${monthName} ${today}, ${year}`);

              setCurrentDate(currentDate);
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
            <TouchableOpacity onPress={() => openAddRModal()}>
              <Entypo name="plus" size={20} color="#F7945E" />
            </TouchableOpacity>
          </View>

          {showAddRModal && (
            <AddReminderModal
              modalShown={showAddRModal}
              closeModal={() => setShowAddRModal(false)}
            />
          )}

          {/* {reminderInput && (
            <View style={styles.reminder_outer}>
              <View style={styles.reminder_container}>
                <RNPickerSelect
                  onValueChange={(value) => setPetId(value)}
                  items={[
                    { label: "Coco", value: "1" },
                    { label: "Buddy", value: "2" },
                    { label: "Noodle", value: "3" },
                  ]}
                />
                <TextInput
                  value={message}
                  onChangeText={(m) => setMessage(m)}
                  placeholder="HI"
                ></TextInput>
                <TextInput
                  value={time}
                  onChangeText={(t) => setTime(t)}
                  placeholder="time"
                ></TextInput>
              </View>
              <TouchableOpacity onPress={addingReminder}>
                <Text>OKAY</Text>
              </TouchableOpacity>
            </View>
          )} */}

          {/* {updateInput && (
            <View style={styles.reminder_outer}>
              <View style={styles.reminder_container}>
                <Image
                  style={styles.pet_image}
                  source={}
                ></Image>
                <TextInput
                  value={updatedMessage}
                  onChangeText={(m) => setUpdatedMessage(m)}
                ></TextInput>
                <TextInput
                  value={updatedTime}
                  onChangeText={(t) => setUpdatedTime(t)}
                ></TextInput>
              </View>
              <TouchableOpacity onPress={() => editReminder()}>
                <Text>OKAY</Text>
              </TouchableOpacity>
            </View>
          )} */}

          {/* MAP OUT ALL REMINDERS WITH VIEW */}
          {currentReminders.map((reminder) => (
            <View key={reminder.id} style={styles.reminder_outer}>
              <View style={styles.reminder_container}>
                <Swipeable
                  ref={(ref) => (swipeableRefs[reminder.id] = ref)}
                  renderLeftActions={() => {
                    return (
                      <View style={styles.swipe_container_l}>
                        <TouchableOpacity
                          onPress={() => openDeleteRModal(reminder.id)}
                        >
                          <Image
                            style={styles.red_button}
                            source={deleteicon}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                  renderRightActions={() => {
                    return (
                      <View style={styles.swipe_container}>
                        <TouchableOpacity
                          onPress={() => openEditRModal(reminder.id)}
                        >
                          <Image style={styles.orange_button} source={edit} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => completeAReminder(reminder.id)}
                        >
                          <Image
                            style={styles.green_button}
                            source={complete}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                >
                  <View style={styles.swipe_box}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        style={styles.pet_image}
                        source={reminder.petImg}
                      ></Image>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{ fontFamily: "Lato-Reg", marginLeft: 10, maxWidth: 250 }}
                      >
                        {" "}
                        {reminder.message}
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontFamily: "Lato-Reg",
                        color: "#F7945E",
                        marginRight: 25,
                      }}
                    >
                      {reminder.time}
                    </Text>
                  </View>
                </Swipeable>
              </View>
            </View>
          ))}

          {showEditRModal && (
            <EditReminderModal
              modalShown={showEditRModal}
              closeModal={() => setShowEditRModal(false)}
              reminderId={reminderId}
              closeSwipeable={closeSwipeable}
            />
          )}

          {showDeleteRModal && (
            <DeleteReminderModal
              modalShown={showDeleteRModal}
              closeModal={() => setShowDeleteRModal(false)}
              reminderId={reminderId}
            />
          )}

          <View style={{ marginBottom: 100 }}></View>
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
    zIndex: 1,
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
  swipe_container_l: {
    width: 38,
    zIndex: 2
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
  red_button: {
    height: 40,
    width: 40,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
});



export default Reminders;