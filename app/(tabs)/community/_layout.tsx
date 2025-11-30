import { Tabs } from "expo-router";

export default function CommunityTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2A7A76",
        tabBarInactiveTintColor: "rgba(34,42,42,0.6)",
      }}
    >
      <Tabs.Screen
        name="circle"
        options={{
          title: "Circle",
        }}
      />
      <Tabs.Screen
        name="everyone"
        options={{
          title: "Everyone",
        }}
      />
    </Tabs>
  );
}

