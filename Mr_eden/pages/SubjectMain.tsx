import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SafeAreaProvider } from "react-native-safe-area-context";

type SubjectCardProps = {
  subject: string;
  teacher: string;
  code: string;
  icon: string;
};

const SubjectCard = ({ subject, teacher, code, icon }: SubjectCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <TouchableOpacity 
      style={styles.subjectCard}
      onPress={() => navigation.navigate('SubjectDetail')}
    >
      <View style={styles.subjectHeader}>
        <Text style={styles.subjectTitle}>{subject}</Text>
        <Ionicons name={icon as any} size={24} color="#468BD7" />
      </View>
      <View style={styles.subjectInfo}>
        <Text style={styles.teacherName}>{teacher}</Text>
        <Text style={styles.classCode}>{code}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function SubjectMain() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTabPress = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.header}>
              <View style={styles.headerLeftGroup}>
                <Image source={require('../assets/hanyang.png')} style={{width: 25, height: 25}} />
                <Text style={styles.headerText}>한양중학교</Text>
              </View>
              <Text style={styles.headerText}>김하늘 님</Text>
            </View>

      <ScrollView style={styles.subjectList}>
        <SubjectCard
          subject="수학2-2"
          teacher="장진용"
          code="Q7J2ZK4M"
          icon="calculator"
        />
        <SubjectCard
          subject="국어2-2"
          teacher="오다현"
          code="R1D8XH9C"
          icon="book"
        />
        <SubjectCard
          subject="도덕2-2"
          teacher="홍현지"
          code="Y5N3T0LW"
          icon="scale"
        />
        <TouchableOpacity style={styles.addClassButton}>
          <Text style={styles.addClassText}>➕ 수업 참여</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => handleTabPress('MainStudent')}
        >
          <Ionicons name="home" size={24} color="#666" />
          <Text style={styles.tabTextInactive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="book" size={24} color="#468BD7" />
          <Text style={styles.tabText}>Subject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="settings" size={24} color="#666" />
          <Text style={styles.tabTextInactive}>Setting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFDFE',
  },
  header: {
    marginTop: 10,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  headerLeftGroup: {
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 8, 
  },
  headerText: {
    fontSize: 20,
    color: '#393939',
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
  subjectList: {
    flex: 1,
    padding: 20,
  },
  subjectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#468BD7',
  },
  subjectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  subjectTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#468BD7',
  },
  subjectInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teacherName: {
    fontSize: 14,
    color: '#666',
  },
  classCode: {
    fontSize: 14,
    color: '#666',
  },
  addClassButton: {
    padding: 15,
    marginHorizontal: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#393939',
    alignItems: 'center',
    marginTop: 10,
  },
  addClassText: {
    color: '#666',
    fontSize: 16,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFFFFF',
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
  },
  tabTextInactive: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
});