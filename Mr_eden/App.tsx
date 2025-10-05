import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/Login";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
}