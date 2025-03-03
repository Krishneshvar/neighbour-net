import { Text, View } from "react-native";
import AlarmControls from "./AlarmControls.jsx";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AlarmControls />
    </View>
  );
}
