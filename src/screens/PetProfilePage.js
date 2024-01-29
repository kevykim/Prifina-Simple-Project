import { View, Text, ImageBackground, StyleSheet } from "react-native";

import background from "../../assets/background.png";

function PetProfilePage() {
  return (
    <View style={styles.main}>
      <ImageBackground source={background} style={styles.img_style}>
        <Text>Pet</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 2,
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
});

export default PetProfilePage;
