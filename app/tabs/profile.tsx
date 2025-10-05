import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a", padding: 16 }}>
      <Text style={{ color: "#e5e7eb", fontSize: 24, fontWeight: "700" }}>
        Profile
      </Text>
      <Text style={{ color: "#94a3b8", marginTop: 8 }}>
        Manage your account and settings.
      </Text>
    </View>
  );
}
