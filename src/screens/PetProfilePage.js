import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";


import background from "../../assets/background.png";
import left from "../../assets/icons/misc/left.png"
import ProfileAvatar from '../../assets/icons/Profile/ProfileAvatar.png'
import PetProfile from '../../assets/icons/Profile/PetProfile.png'
import VetInfo from '../../assets/icons/misc/vetinfo.png'
import orange from "../../assets/icons/misc/orange.png";
import showmore from '../../assets/icons/misc/showmore.png'

import DayButton from "../components/DayButton";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function PetProfilePage({navigation}) {

  const [checkedImg, setCheckedImg] = useState(orange)

  

  return (
    <View style={styles.main}>
      <ImageBackground source={background} style={styles.img_style}>
        <View style={styles.petprofile_header}>
          <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
            <Image style={styles.left_button} source={left} />
          </TouchableOpacity>
          <Text style={styles.petprofile_text}>Pet Profile</Text>
          <Image source={ProfileAvatar}></Image>
        </View>

        <Image style={styles.petprofile_img} source={PetProfile}></Image>

        <View style={styles.pet_info_container}>
          <Text
            style={{ color: "#F7945E", fontFamily: "Marvin", fontSize: 24 }}
          >
            Test Pet
          </Text>
          <View style={styles.pet_info_text}>
            <Text style={{ fontFamily: "Lato-Reg" }}>
              3 Years, Siamese Cat{" "}
            </Text>
            <TouchableOpacity>
              <FontAwesome5 name="edit" size={13} color="grey" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secondrow_container}>
          <View style={styles.vet_info_outer}>
            <View style={styles.vet_info_container}>
              <View style={styles.vet_info_header}>
                <Image source={VetInfo}></Image>
                <Text style={{ fontFamily: "Lato-Light", color: "gray" }}>
                  Vet Info
                </Text>
              </View>

              <View>
                <Text style={styles.hospital}>Belleevue Animal ...</Text>

                <View>
                  <Text style={styles.address_text}>10415 Main St,</Text>
                  <Text style={styles.address_text}>Bellevue</Text>
                  <Text style={styles.address_text}>WA 98004</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.snippet_outer}>
            <View style={styles.snippet_container}>
              <View style={styles.snippet_header}>
                <View style={styles.date_container}>
                  <FontAwesome name="paw" size={18} color="#F7945E" />
                  <Text style={{ marginLeft: 7, fontFamily: "Lato-Light" }}>
                    Today
                  </Text>
                  <Text style={{ fontFamily: "Lato-Bold", color: "#F7945E" }}>
                    {" "}
                    {Math.floor(Math.random() * 5) + 1}
                  </Text>
                </View>
                <Entypo name="plus" size={20} color="#F7945E" />
              </View>

              {/* Map out today's reminders */}
              <View style={{alignItems: 'center'}}>
              <ScrollView>
                <View style={styles.snippet_task}>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 4,}}>
                <Image style={{width: 17, height: 17}} source={orange}/>
                <Text style={{fontFamily: 'Lato-Reg', fontSize: 13, marginLeft: 10}}>Taking Med</Text>
                  </View>
                </View>

                <View style={styles.snippet_task_finished}>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 4,}}>
                <Text style={{fontFamily: 'Lato-Reg', fontSize: 13, marginLeft: 10}}>Taking Med</Text>
                  </View>
                </View>


              </ScrollView>
                <TouchableOpacity>
                  <Image source={showmore} />
                </TouchableOpacity>
                
              </View>
            </View>
          </View>
        </View>

        <View style={styles.calendar_outer}>
          <View style={styles.calendar_container}>
            <View style={styles.calendar_header}>
              <FontAwesome name="paw" size={18} color="#F7945E" />
              <Text style={{ fontFamily: "Lato-Reg", marginLeft: 9 }}>
                Upcoming Tasks
              </Text>
            </View>
            <View style={styles.calendar_days}>
              <DayButton day="Mo" initialState={orange} />
              <DayButton day="Tu" initialState={orange} />
              <DayButton day="We" initialState={orange} />
              <DayButton day="Th" initialState={orange} />
              <DayButton day="Fr" initialState={orange} />
              <DayButton day="Sa" initialState={orange} />
              <DayButton day="Su" initialState={orange} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

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
  petprofile_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 326,
    padding: 2,
    height: 100,
    marginTop: 65,
  },
  left_button: {
    height: 60,
    width: 60,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  petprofile_text: {
    fontFamily: "Marvin",
    fontSize: 24,
  },
  petprofile_img: {
    borderRadius: 100,
    height: 200,
    width: 162,
  },
  pet_info_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    marginBottom: 10,
  },
  pet_info_text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  secondrow_container: {
    flexDirection: "row",
    width: 326,
    justifyContent: "space-between",
    alignItems: "center",
  },
  vet_info_outer: {
    alignItems: "center",
    justifyContent: "center",
    width: 145,
    height: 160,
    backgroundColor: "#fcf0e8",
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 25,
    shadowColor: "#F7945E",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  vet_info_container: {
    width: 135,
    height: 150,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 15,
  },
  vet_info_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 70,
  },
  hospital: {
    fontFamily: "Lato-Bold",
    fontSize: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  address_text: {
    fontFamily: "Lato-Reg",
    fontSize: 9.5,
  },
  snippet_outer: {
    alignItems: "center",
    justifyContent: "center",
    width: 170,
    height: 160,
    backgroundColor: "#fcf0e8",
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 25,
    shadowColor: "#F7945E",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  snippet_container: {
    width: 160,
    height: 150,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 15,
  },
  snippet_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  snippet_task: {
    width: 124,
    height: 38,
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 7,
    shadowColor: "#F7945E",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    backgroundColor: "#ECF0F3",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 5,
  },
  snippet_task_finished: {
    width: 124,
    height: 38,
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 7,
    shadowColor: "#F7945E",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: "#F7945E",
  },

  date_container: {
    flexDirection: "row",
  },
  calendar_outer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 326,
    height: 120,
    backgroundColor: "#fcf0e8",
    borderWidth: 0.5,
    borderColor: "#F7945E",
    borderRadius: 25,
    shadowColor: "#F7945E",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  calendar_container: {
    width: 316,
    height: 110,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 15,
  },
  calendar_header: {
    flexDirection: "row",
  },
  calendar_days: {
    flexDirection: "row",
    width: 280,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginTop: 10,
  },
});

export default PetProfilePage;
