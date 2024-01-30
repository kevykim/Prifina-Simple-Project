import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import LoginPage from './src/screens/LoginPage';

import background from './assets/background.png'
import NavigationBar from './src/components/NavigationBar';

export default function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  // temporary sign in
  const fakeSignIn = (data) => {
    setLoggedIn(data)
  }

  return (
    <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider>
          <NavigationContainer>
            {isLoggedIn ? (
              <NavigationBar></NavigationBar>
            ) : (
              <ImageBackground
                source={background}
                style={styles.view_container}
              >
                <LoginPage setLoggedIn={fakeSignIn} />
              </ImageBackground>
            )}
          </NavigationContainer>
        </SafeAreaProvider>
    </GestureHandlerRootView>
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
