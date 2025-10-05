import { Text, View } from "react-native";

export default function Tasks() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a", padding: 16 }}>
      <Text style={{ color: "#e5e7eb", fontSize: 24, fontWeight: "700" }}>
        My Tasks
      </Text>
      <Text style={{ color: "#94a3b8", marginTop: 8 }}>
        Your assigned tasks will show up here.
      </Text>
    </View>
  );
}
