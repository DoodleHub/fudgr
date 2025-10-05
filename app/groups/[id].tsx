import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { getGroupById } from '../data/groups';

export default function GroupDetailsScreen() {
  const params = useLocalSearchParams<{ id?: string }>();
  const navigation = useNavigation();

  const group = params.id ? getGroupById(String(params.id)) : undefined;

  useEffect(() => {
    if (group) {
      navigation.setOptions({ title: group.name });
    }
  }, [group, navigation]);

  if (!group) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Text>Group not found.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 8 }}>
        {group.name}
      </Text>
      <Text style={{ color: '#4b5563', marginBottom: 16 }}>
        {group.description}
      </Text>
      <Text style={{ color: '#6b7280' }}>Members: {group.membersCount}</Text>
    </View>
  );
}
