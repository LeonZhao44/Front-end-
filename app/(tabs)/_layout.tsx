import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2A7A76",
        tabBarInactiveTintColor: "rgba(34,42,42,0.6)",
      }}
    >
      <Tabs.Screen
        name="me"
        options={{
          title: "Me",
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
        }}
      />
    </Tabs>
  );
}

