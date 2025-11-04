import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type SubjectItemProps = {
  subject: string;
  class: string;
  time: string;
};

const SubjectItem: React.FC<SubjectItemProps> = (props) => (
  <View style={styles.subjectItem}>
    <Text style={styles.subjectText}>{props.subject}</Text>
    <Text style={styles.classText}>{props.class}</Text>
  </View>
);

export default function MainStudent() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.schoolName}>한양중학교</Text>
          <Text style={styles.userName}>김하늘 님</Text>
        </View>
      </View>

      <View style={styles.achievementBox}>
        <View style={styles.starIcon}>
          <Ionicons name="star" size={50} color="#468BD7" />
        </View>
        <Text style={styles.achievementText}>3일째 과제 학습 달성!</Text>
      </View>

      <ScrollView style={styles.subjectList}>
        <SubjectItem subject="영어2-2" time="4시간 남음" class="주제별표 자료 제출" />
        <SubjectItem subject="수학2-2" time="D-2" class="교과서 중단원 평가 풀어오기" />
        <SubjectItem subject="국어2-2" time="D-3" class="필수어법 5개 암기하기" />
        <SubjectItem subject="국어2-2" time="D-6" class="작품 분석 과제" />
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={24} color="#468BD7" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tabItem} 
          onPress={() => navigation.navigate('SubjectMain')}
        >
          <Ionicons name="book" size={24} color="#666" />
          <Text style={[styles.tabText, styles.tabTextInactive]}>Subject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="settings" size={24} color="#666" />
          <Text style={[styles.tabText, styles.tabTextInactive]}>Setting</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  schoolName: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  achievementBox: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  starIcon: {
    marginBottom: 10,
  },
  achievementText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  subjectList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  subjectItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  subjectText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  classText: {
    fontSize: 14,
    color: '#666',
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
    color: '#666',
  },
});