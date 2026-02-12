import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from './module';
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabBar from '../components/TabBar';

type ActiveQuizItemProps = {
  title: string;
  timeLeft: string;
};

const ActiveQuizItem = ({ title, timeLeft }: ActiveQuizItemProps) => (
  <TouchableOpacity style={styles.activeQuizCard}>
    <Text style={styles.activeQuizTitle}>{title}</Text>
    <Text style={styles.activeQuizTime}>{timeLeft}</Text>
  </TouchableOpacity>
);

type UpcomingQuizItemProps = {
  title: string;
  daysLeft: string;
  dueDate: string;
  dueTime: string;
};

const UpcomingQuizItem = ({ title, daysLeft, dueDate, dueTime }: UpcomingQuizItemProps) => (
  <TouchableOpacity style={styles.upcomingQuizCard}>
    <View style={styles.upcomingQuizHeader}>
      <Text style={styles.upcomingQuizTitle}>{title}</Text>
    </View>
    <View style={styles.upcomingQuizFooter}>
      <Text style={styles.upcomingQuizDays}>{daysLeft}</Text>
      <Text style={styles.upcomingQuizDate}>{dueDate} {dueTime}</Text>
    </View>
  </TouchableOpacity>
);

type CompletedQuizItemProps = {
  title: string;
  score: string;
  completedDate: string;
  completedTime: string;
};

const CompletedQuizItem = ({ title, score, completedDate, completedTime }: CompletedQuizItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <TouchableOpacity 
      style={styles.completedQuizCard}
      onPress={() => navigation.navigate('QuizResult')}
    >
      <View style={styles.completedQuizHeader}>
        <Text style={styles.completedQuizTitle}>{title}</Text>
      </View>
      <View style={styles.completedQuizFooter}>
        <Text style={styles.completedQuizScore}>{score}</Text>
        <Text style={styles.completedQuizDate}>{completedDate} {completedTime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function QuizMain() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <View style={styles.headerTop}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={32} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 현재 진행중인 퀴즈 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>현재 진행중인 퀴즈</Text>
          <ActiveQuizItem 
            title="쪽지시험" 
            timeLeft="37분 뒤 마감"
          />
        </View>

        {/* 앞으로 남은 퀴즈 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>앞으로 남은 퀴즈</Text>
          <UpcomingQuizItem 
            title="중간고사"
            daysLeft="D-7"
            dueDate="25/10/07"
            dueTime="09:30"
          />
          <UpcomingQuizItem 
            title="단원평가"
            daysLeft="D-20"
            dueDate="25/10/20"
            dueTime="13:30"
          />
        </View>

        {/* 평가 완료된 퀴즈 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>평가 완료된 퀴즈</Text>
          <CompletedQuizItem 
            title="단원평가"
            score="60/100"
            completedDate="25/9/15"
            completedTime="15:00"
          />
        </View>
      </ScrollView>

      <TabBar activeTab="subject" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFDFE',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 10,
  },
  headerSection: {
    backgroundColor: '#FAFDFE',
    padding: 20,
    marginTop: 40,
    paddingBottom: 10,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
    fontFamily: 'Pretendard',
    marginLeft: 10,
    marginTop: 10,
  },
  activeQuizCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.01,
    shadowRadius: 6,
    borderWidth: 0.4,
    borderColor: '#000000',
  },
  activeQuizTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
    fontFamily: 'Pretendard',
  },
  activeQuizTime: {
    fontSize: 14,
    color: '#FF4444',
    fontFamily: 'Pretendard',
  },
  upcomingQuizCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.01,
    shadowRadius: 6,
    borderWidth: 0.4,
    borderColor: '#000000',
  },
  upcomingQuizHeader: {
    marginBottom: 12,
  },
  upcomingQuizTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Pretendard',
  },
  upcomingQuizFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upcomingQuizDays: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'Pretendard',
  },
  upcomingQuizDate: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Pretendard',
  },
  completedQuizCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.01,
    shadowRadius: 6,
    borderWidth: 0.4,
    borderColor: '#000000',
  },
  completedQuizHeader: {
    marginBottom: 12,
  },
  completedQuizTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Pretendard',
  },
  completedQuizFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completedQuizScore: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'Pretendard',
  },
  completedQuizDate: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Pretendard',
  },
});
