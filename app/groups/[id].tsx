import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
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

  const memberById = useMemo(() => {
    const map: Record<string, { name: string; initials: string }> = {};
    group.members.forEach(
      (m) => (map[m.id] = { name: m.name, initials: m.initials })
    );
    return map;
  }, [group.members]);

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a' }}>
      <View style={{ padding: 16, paddingBottom: 8 }}>
        <Text style={{ fontSize: 28, fontWeight: '700', color: '#e5e7eb' }}>
          {group.name}
        </Text>
        <Text style={{ color: '#94a3b8', marginTop: 6 }}>
          {group.description}
        </Text>
      </View>

      <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
        <View
          style={{
            backgroundColor: '#111827',
            borderRadius: 16,
            padding: 16,
            borderWidth: 1,
            borderColor: '#1f2937',
          }}
        >
          <Text style={{ color: '#9ca3af', marginBottom: 8 }}>
            Members ({group.members.length})
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {group.members.map((m) => (
              <View
                key={m.id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#1f2937',
                  borderRadius: 9999,
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  marginRight: 8,
                  marginBottom: 8,
                }}
              >
                <View
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 9999,
                    backgroundColor: '#374151',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 6,
                  }}
                >
                  <Text
                    style={{
                      color: '#cbd5e1',
                      fontSize: 12,
                      fontWeight: '700',
                    }}
                  >
                    {m.initials}
                  </Text>
                </View>
                <Text style={{ color: '#e5e7eb' }}>{m.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, paddingTop: 16, flex: 1 }}>
        <Text
          style={{
            color: '#e5e7eb',
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 8,
          }}
        >
          Tasks
        </Text>
        <FlatList
          data={group.tasks}
          keyExtractor={(t) => t.id}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => {
            const assignee = memberById[item.assigneeId];
            const statusColor =
              item.status === 'done'
                ? '#10b981'
                : item.status === 'in_progress'
                ? '#f59e0b'
                : '#6b7280';
            const statusLabel =
              item.status === 'done'
                ? 'Done'
                : item.status === 'in_progress'
                ? 'In Progress'
                : 'To Do';
            return (
              <View
                style={{
                  backgroundColor: '#111827',
                  borderRadius: 16,
                  padding: 16,
                  borderWidth: 1,
                  borderColor: '#1f2937',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: '#e5e7eb',
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      {item.title}
                    </Text>
                    {item.description ? (
                      <Text
                        style={{ color: '#9ca3af', marginTop: 4 }}
                        numberOfLines={2}
                      >
                        {item.description}
                      </Text>
                    ) : null}
                  </View>
                  <View
                    style={{
                      marginLeft: 12,
                      backgroundColor: '#0b1220',
                      borderRadius: 9999,
                      paddingVertical: 6,
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: statusColor,
                        fontWeight: '700',
                        fontSize: 12,
                      }}
                    >
                      {statusLabel}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 9999,
                      backgroundColor: '#1f2937',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: '#cbd5e1',
                        fontSize: 12,
                        fontWeight: '700',
                      }}
                    >
                      {assignee?.initials}
                    </Text>
                  </View>
                  <Text style={{ color: '#9ca3af' }}>
                    Assigned to{' '}
                    <Text style={{ color: '#e5e7eb' }}>{assignee?.name}</Text>
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
