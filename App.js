import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomePage from './src/screens/HomePage';
import Reminders from './src/screens/Reminders';





export default function App() {

  const Tab = createMaterialBottomTabNavigator();

  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='HomePage' component={HomePage}/>
          <Tab.Screen name='Reminders' component={Reminders}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
