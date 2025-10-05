import { Link } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { mockGroups } from "./data/groups";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 }}>
        <Text style={{ color: "#e5e7eb", fontSize: 28, fontWeight: "700" }}>
          Groups
        </Text>
        <Text style={{ color: "#94a3b8", marginTop: 4 }}>
          Browse your groups and jump back into tasks
        </Text>
      </View>
      <FlatList
        data={mockGroups}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: "/groups/[id]", params: { id: item.id } } as any}
            asChild
          >
            <Pressable
              style={({ pressed }) => ({
                backgroundColor: "#111827",
                borderRadius: 16,
                padding: 16,
                opacity: pressed ? 0.85 : 1,
                borderWidth: 1,
                borderColor: "#1f2937",
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 4 },
              })}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: "#1f2937",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 12,
                  }}
                >
                  <Text style={{ color: "#93c5fd", fontWeight: "700" }}>
                    {item.name
                      .split(" ")
                      .map((w: string) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: "#e5e7eb",
                      fontSize: 18,
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{ color: "#9ca3af", marginTop: 4 }}
                    numberOfLines={1}
                  >
                    {item.description}
                  </Text>
                </View>
                <View style={{ marginLeft: 12 }}>
                  <Text style={{ color: "#9ca3af" }}>
                    {item.members.length} members
                  </Text>
                </View>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
