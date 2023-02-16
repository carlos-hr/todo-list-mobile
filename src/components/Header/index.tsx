import { Image, View } from "react-native";
import { styles } from "./styles";

const logo = require("../../../assets/logo.png");

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
}
