import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SafeAreaProvider } from "react-native-safe-area-context";

type SubjectItemProps = {
  subject: string;
  class: string;
  time: string;
};

const SubjectItem: React.FC<SubjectItemProps> = (props) => (
  <View style={styles.subjectItem}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.mainText}>{props.subject}</Text>
      <Text style={styles.mainText}>{props.time}</Text>
    </View>
    <Text style={styles.classText}>{props.class}</Text>
  </View>
);

export default function MainStudent() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>한양중학교</Text>
        <Text style={styles.headerText}>김하늘 님</Text>
      </View>

      <View style={styles.achievementBox}>
        <View style={styles.starIcon}>
          <Ionicons name="star" size={100} color="#468BD7" />
        </View>
        <Text style={styles.mainText}>3일째 과제 학습 달성!</Text>
      </View>

      <ScrollView style={styles.subjectList}>
        <SubjectItem subject="영어2-2" time="4시간 남음" class="주제별표 자료 제출" />
        <SubjectItem subject="수학2-2" time="D-2" class="교과서 중단원 평가 풀어오기" />
        <SubjectItem subject="국어2-2" time="D-3" class="필수어법 5개 암기하기" />
        <SubjectItem subject="국어2-2" time="D-6" class="작품 분석 과제" />
        <SubjectItem subject="수학2-2" time="D-7" class="중간고사"/>
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
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFDFE',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#393939',
    fontFamily: 'Pretendard',
    fontWeight: '600',
  },
  achievementBox: {
    margin: 20,
    padding: 20,
    alignItems: 'center',
  },
  starIcon: {
    marginBottom: 10,
  },
  mainText: {
    fontFamily: 'Pretentard',
    fontSize: 17,
    fontWeight: 'semibold',
    color: '#000',
  },
  subjectList: {
    flex: 1,
    paddingHorizontal: 40,
  },
  subjectItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#393939',
  },
  classText: {
    paddingTop: 30,
    fontSize: 17,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#00000088)',
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