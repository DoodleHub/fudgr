import { Link } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';
import { mockGroups } from './data/groups';

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
      <FlatList
        data={mockGroups}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: '/groups/[id]', params: { id: item.id } } as any}
            asChild
          >
            <Pressable
              style={({ pressed }) => ({
                backgroundColor: '#f5f5f7',
                borderRadius: 12,
                padding: 16,
                opacity: pressed ? 0.7 : 1,
                borderWidth: 1,
                borderColor: '#e5e7eb',
              })}
            >
              <Text
                style={{ fontSize: 18, fontWeight: '600', marginBottom: 6 }}
              >
                {item.name}
              </Text>
              <Text
                style={{ color: '#4b5563', marginBottom: 8 }}
                numberOfLines={2}
              >
                {item.description}
              </Text>
              <Text style={{ color: '#6b7280' }}>
                {item.membersCount} members
              </Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
