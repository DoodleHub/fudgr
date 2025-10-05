import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#e5e7eb',
        headerTitleStyle: { color: '#e5e7eb' },
        tabBarStyle: { backgroundColor: '#0f172a', borderTopColor: '#1f2937' },
        tabBarActiveTintColor: '#e5e7eb',
        tabBarInactiveTintColor: '#9ca3af',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'My Tasks',
          tabBarLabel: 'My Tasks',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs>
  );
}
