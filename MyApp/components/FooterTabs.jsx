import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import MyStylistScreen from "../screens/MyStylistScreen";
import CommunityScreen from "../screens/CommunityScreen";
import CollabRoomScreen from "../screens/CollabRoomScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function FooterTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "My Stylist":
              iconName = "person-circle";
              break;
            case "Community":
              iconName = "people";
              break;
            case "Collab Room":
              iconName = "chatbox-ellipses";
              break;
            case "Profile":
              iconName = "person";
              break;
            default:
              iconName = "ellipse";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#ccc",
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Stylist" component={MyStylistScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Collab Room" component={CollabRoomScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
