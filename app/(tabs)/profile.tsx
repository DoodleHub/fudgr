import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#e5e7eb', fontSize: 18 }}>Profile</Text>
    </View>
  );
}
