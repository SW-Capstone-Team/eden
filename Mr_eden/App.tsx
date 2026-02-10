import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login, { ID, status } from './pages/Login';
import MainStudent from './pages/MainStudent';
import SubjectMain from './pages/SubjectMain';
import SubjectDetail from './pages/SubjectDetail';
import Register from './pages/Register';
import Settings from './pages/Settings';
import ProfileSettings from './pages/ProfileSettings';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

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
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [prevLoggedIn, setprevLoggedIn] = useState(false);

  // 수정 필요(여긴 무조건, 나머진 임시로 처리)
  /*
  const getId = async () => {
    const { data, error } = await supabase.auth.getSession();
    if(error) {
        console.log("getid Error:", error);
        return null;
    }
    return data?.session?.user?.id || null;
  };
  
  useEffect(() => {
    const checkLoginStatus = async () => {
      const userId = await getId();
      if(userId) {
        setprevLoggedIn(false);
        setisLoggedIn(true);
      } else {
        setprevLoggedIn(true);
        setisLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    if(prevLoggedIn && !isLoggedIn) {
      async () => {
        try {
          if (status && ID) {
            await AsyncStorage.setItem("savedId", ID);
            console.log("아이디 저장됨:", ID);
          }
          console.log("로그인/회원가입 처리 (시뮬레이션):", ID);
        } catch (e) {
          console.error(e);
        }
      };
    }
  }, [isLoggedIn, prevLoggedIn]);
  */

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