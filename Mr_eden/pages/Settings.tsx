import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ToggleSwitch from 'toggle-switch-react-native'

type MenuItemProps = {
  title: string;
  onPress?: () => void;
  showSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  versionText?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, onPress, showSwitch, switchValue, onSwitchChange, versionText }) => (
  <TouchableOpacity 
    style={styles.menuItem} 
    onPress={onPress}
    disabled={showSwitch || !!versionText}
  >
    <Text style={styles.menuText}>{title}</Text>
    {showSwitch ? (
      <Switch
        value={switchValue}
        onValueChange={onSwitchChange}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={switchValue ? '#fff' : '#f4f3f4'}
      />
    ) : versionText ? (
      <Text style={styles.versionText}>{versionText}</Text>
    ) : (
      <Ionicons name="chevron-forward" size={24} color="#fff" />
    )}
  </TouchableOpacity>
);

type MenuSectionProps = {
  children: React.ReactNode;
};

const MenuSection: React.FC<MenuSectionProps> = ({ children }) => (
  <View style={styles.menuSection}>
    {children}
  </View>
);

export default function Settings() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Profile Section */}
          <TouchableOpacity 
            style={styles.profileSection}
            onPress={() => navigation.navigate('ProfileSettings')}
          >
            <View style={styles.profileImageContainer}>
              <Image 
                source={require('../assets/하냥.png')} 
                style={styles.profileImage}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>김하냥</Text>
              <Text style={styles.profileSubtext}>내 정보 · 계정 관리</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#333" />
          </TouchableOpacity>

          {/* 알림·진동, 화면 모드, 버전 정보 */}
          <MenuSection>
            <MenuItem 
              title="알림 · 진동" 
              onPress={() => {/* 알림 설정 화면으로 이동 */}}
            />
            <View style={styles.menuDivider} />
            <MenuItem 
              title="다크모드"
              showSwitch
              switchValue={darkMode}
              onSwitchChange={setDarkMode}
            />
            <View style={styles.menuDivider} />
            <MenuItem 
              title="버전 정보"
              versionText="v1.0.0"
            />
          </MenuSection>

          {/* 고객센터, 자주하는 질문, 이용약관 */}
          <MenuSection>
            <MenuItem 
              title="고객센터"
              onPress={() => {/* 고객센터 화면으로 이동 */}}
            />
            <View style={styles.menuDivider} />
            <MenuItem 
              title="자주하는 질문"
              onPress={() => {/* FAQ 화면으로 이동 */}}
            />
            <View style={styles.menuDivider} />
            <MenuItem 
              title="이용약관"
              onPress={() => {/* 이용약관 화면으로 이동 */}}
            />
          </MenuSection>

          {/* 로그아웃 */}
          <MenuSection>
            <MenuItem 
              title="로그아웃"
              onPress={() => {/* 로그아웃 처리 */}}
            />
          </MenuSection>
        </ScrollView>

        {/* Tab Bar */}
        <View style={styles.tabBar}>
          <TouchableOpacity 
            style={styles.tabItem}
            onPress={() => navigation.navigate('MainStudent')}
          >
            <Ionicons name="home-outline" size={24} color="#666" />
            <Text style={[styles.tabText, styles.tabTextInactive]}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem}
            onPress={() => navigation.navigate('SubjectMain')}
          >
            <Ionicons name="layers-outline" size={24} color="#666" />
            <Text style={[styles.tabText, styles.tabTextInactive]}>Subject</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="settings-outline" size={24} color="#468BD7" />
            <Text style={styles.tabText}>Setting</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFDFE',
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderBlockColor: 'black',
    borderWidth: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 25,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    fontFamily: 'Pretendard',
  },
  profileSubtext: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Pretendard',
  },
  menuSection: {
    backgroundColor: '#468BD7',
    borderRadius: 28,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  menuText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Pretendard',
  },
  versionText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '400',
    fontFamily: 'Pretendard',
  },
  menuDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#468BD7',
    fontFamily: 'Pretendard',
  },
  tabTextInactive: {
    color: '#666',
  },
});
