import { useFonts } from 'expo-font'

export const useCustomFonts = () => {
    let [fontsLoaded] = useFonts({
      "Lato-Reg": require("../../assets/fonts/Lato/Lato-Regular.ttf"),
      "Lato-Bold": require("../../assets/fonts/Lato/Lato-Bold.ttf"),
      "Lato-Light": require("../../assets/fonts/Lato/Lato-Light.ttf"),
      "Marvin": require("../../assets/fonts/Marvin/Marvin.otf")
    });

    return fontsLoaded
}