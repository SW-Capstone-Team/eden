import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '../pages/module';

type TabBarProps = {
  activeTab: 'home' | 'subject' | 'settings';
};

export default function TabBar({ activeTab }: TabBarProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTabPress = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.tabBar} edges={['bottom']}>
      <TouchableOpacity 
        style={styles.tabItem} 
        onPress={() => handleTabPress('MainStudent')}
      >
        <Ionicons 
          name="home-outline" 
          size={24} 
          color={activeTab === 'home' ? '#468BD7' : '#666'} 
        />
        <Text style={activeTab === 'home' ? styles.tabText : styles.tabTextInactive}>
          Home
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => handleTabPress('SubjectMain')}
      >
        <Ionicons 
          name="layers-outline" 
          size={24} 
          color={activeTab === 'subject' ? '#468BD7' : '#666'} 
        />
        <Text style={activeTab === 'subject' ? styles.tabText : styles.tabTextInactive}>
          Subject
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => handleTabPress('Settings')}
      >
        <Ionicons 
          name="settings-outline" 
          size={24} 
          color={activeTab === 'settings' ? '#468BD7' : '#666'} 
        />
        <Text style={activeTab === 'settings' ? styles.tabText : styles.tabTextInactive}>
          Setting
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FAFDFE',
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
    fontSize: 12,
    marginTop: 4,
    color: '#666',
    fontFamily: 'Pretendard',
  },
});
