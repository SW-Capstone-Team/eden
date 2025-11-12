import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import MainStudent from './pages/MainStudent';
import SubjectMain from './pages/SubjectMain';
import SubjectDetail from './pages/SubjectDetail';
import Register from './pages/Register';
import Settings from './pages/Settings';
import ProfileSettings from './pages/ProfileSettings';
import { FontAwesome } from "@expo/vector-icons";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainStudent: undefined;
  SubjectMain: undefined;
  SubjectDetail: undefined;
  Settings: undefined;
  ProfileSettings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MainStudent" 
          component={MainStudent} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SubjectMain" 
          component={SubjectMain} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SubjectDetail" 
          component={SubjectDetail} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProfileSettings" 
          component={ProfileSettings} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}