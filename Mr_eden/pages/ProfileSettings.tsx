import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ProfileItemProps = {
  label: string;
  value: string;
  onPress?: () => void;
};

const ProfileItem: React.FC<ProfileItemProps> = ({ label, value, onPress }) => (
  <TouchableOpacity 
    style={styles.profileItem}
    onPress={onPress}
    disabled={!onPress}
  >
    <Text style={styles.profileLabel}>{label}</Text>
    <View style={styles.profileValueContainer}>
      <Text style={styles.profileValue}>{value}</Text>
      {onPress && <Ionicons name="chevron-forward" size={20} color="#fff" />}
    </View>
  </TouchableOpacity>
);

type ProfileSectionProps = {
  title: string;
  children: React.ReactNode;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>
      {children}
    </View>
  </View>
);

export default function ProfileSettings() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={28} color="#333" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Profile Image */}
          <View style={styles.profileImageSection}>
            <View style={styles.profileImageContainer}>
              <Image 
                source={require('../assets/하냥.png')} 
                style={styles.profileImage}
              />
              <TouchableOpacity style={styles.editImageButton}>
                <Ionicons name="camera" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* 기본 정보 섹션 */}
          <ProfileSection title="기본 정보">
            <ProfileItem label="이름" value="김하냥" onPress={() => {}} />
            <View style={styles.divider} />
            <ProfileItem label="소속학교" value="한양중학교" onPress={() => {}} />
            <View style={styles.divider} />
            <ProfileItem label="생년월일" value="2010. 03. 28" onPress={() => {}} />
            <View style={styles.divider} />
            <ProfileItem label="이메일" value="hanyangkim0328@naver.com" onPress={() => {}} />
          </ProfileSection>

          {/* 계정 관리 섹션 */}
          <ProfileSection title="계정 관리">
            <TouchableOpacity style={styles.accountButton}>
              <Text style={styles.accountButtonText}>아이디 변경</Text>
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.accountButton}>
              <Text style={styles.accountButtonText}>비밀번호 변경</Text>
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </ProfileSection>

          {/* 계정 탈퇴 섹션 */}
          <ProfileSection title="">
            <TouchableOpacity style={styles.accountButton}>
              <Text style={styles.accountButtonText}>계정 탈퇴</Text>
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </ProfileSection>
        </ScrollView>

        {/* Tab Bar */}
        <View style={styles.tabBar}>
          <TouchableOpacity 
            style={styles.tabItem}
            onPress={() => navigation.navigate('MainStudent')}
          >
            <Ionicons name="home-outline" size={24} color="#666" />
            <Text style={styles.tabTextInactive}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem}
            onPress={() => navigation.navigate('SubjectMain')}
          >
            <Ionicons name="layers-outline" size={24} color="#666" />
            <Text style={styles.tabTextInactive}>Subject</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.tabItem}
            onPress={() => navigation.navigate('Settings')}
          >
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  scrollView: {
    flex: 1,
  },
  profileImageSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImageContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#468BD7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 116,
    height: 116,
    borderRadius: 58,
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#468BD7',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FAFDFE',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    marginLeft: 5,
    fontFamily: 'Pretendard',
  },
  sectionContent: {
    backgroundColor: '#468BD7',
    borderRadius: 28,
    overflow: 'hidden',
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    paddingHorizontal: 20,
  },
  profileLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Pretendard',
  },
  profileValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  profileValue: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 20,
  },
  accountButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    paddingHorizontal: 20,
  },
  accountButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Pretendard',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#fff',
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
