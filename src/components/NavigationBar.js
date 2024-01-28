
import { StyleSheet, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PetProfilePage from "../screens/PetProfilePage";
import HomePage from "../screens/HomePage";
import Reminders from "../screens/Reminders";

import FocusHome from '../../assets/icons/NavIcons/FocusHome.png'
import FocusPaw from '../../assets/icons/NavIcons/FocusPaw.png'
import FocusNotification from '../../assets/icons/NavIcons/FocusNotification.png'
import Home from '../../assets/icons/NavIcons/Home.png'
import Paw from '../../assets/icons/NavIcons/Paw.png'
import Notification from '../../assets/icons/NavIcons/Notification.png'



const Tab = createBottomTabNavigator();

function NavigationBar () {

return (
  <Tab.Navigator
    initialRouteName="HomePage"
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.navBarStyle,
      tabBarShowLabel: false,
    }}
    >
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
          style={styles.navIcon}
          source={focused ? FocusPaw : Paw}
          ></Image>
          ),
        }}
        name="Pet"
        component={PetProfilePage}
        />
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
          style={styles.navIcon}
          source={focused ? FocusHome : Home}
          ></Image>
          ),
        }}
        name="HomePage"
        component={HomePage}
        />
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
          style={styles.navIcon}
          source={focused ? FocusNotification : Notification}
          ></Image>
          ),
        }}
        name="Reminders"
        component={Reminders}
        />
  </Tab.Navigator>
);

};




export default NavigationBar;



const styles = StyleSheet.create({
  navBarStyle: {
    position: "absolute",
    borderTopWidth: 0,
    bottom: 35,
    left: 90,
    backgroundColor: "#52B788",
    borderRadius: 30,
    width: 208,
    height: 64,
  },
  navIcon: {
    position: "relative",
    top: 15,
  },
});