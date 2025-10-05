import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#e5e7eb',
        headerTitleStyle: { color: '#e5e7eb' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="groups/[id]" options={{ title: 'Group Details' }} />
    </Stack>
  );
}
