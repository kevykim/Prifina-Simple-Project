import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from './src/screens/LoginPage';

import background from './assets/background.png'
import NavigationBar from './src/components/NavigationBar';
import SignUpPage from './src/screens/SignUpPage';
import { FakeDatabaseProvider } from './context/FakeDataBase';

export default function App() {
  
  const [fakeLogin, setFakeLogin] = useState(false);


  const Stack = createStackNavigator();

  const fakeSignIn = (data) => {
    setFakeLogin(data)
  }

  return (
    <FakeDatabaseProvider>
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          {fakeLogin ? (
            <NavigationBar></NavigationBar>
          ) : (
            <ImageBackground source={background} style={styles.view_container}>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="LoginPage">
                  {(props) => <LoginPage {...props} setFakeLogin={setFakeLogin}/>}
                </Stack.Screen>
                
                {/* <Stack.Screen name="SignUpPage" component={SignUpPage} /> */}
              </Stack.Navigator>
            </ImageBackground>
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
    </FakeDatabaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view_container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
