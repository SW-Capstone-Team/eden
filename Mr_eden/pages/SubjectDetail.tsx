import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { SafeAreaProvider } from "react-native-safe-area-context";

type QuizItemProps = {
  title: string;
  daysLeft: string;
  dueDate: string;
};

const QuizItem = ({ title, daysLeft, dueDate }: QuizItemProps) => (
  <View style={styles.quizCard}>
    <View style={styles.quizInfo}>
      <Text style={styles.quizTitle}>{title}</Text>
      <Text style={styles.quizDays}>{daysLeft}</Text>
    </View>
    <Text style={styles.quizDate}>{dueDate}</Text>
  </View>
);

type AssignmentItemProps = {
  title: string;
  daysLeft: string;
  time: string;
  dueDate: string;
};

const AssignmentItem = ({ title, daysLeft, time, dueDate }: AssignmentItemProps) => (
  <View style={styles.assignmentCard}>
    <View style={styles.assignmentInfo}>
      <Text style={styles.assignmentTitle}>{title}</Text>
      <Text style={styles.assignmentDays}>{daysLeft}</Text>
    </View>
    <View style={styles.assignmentTimeContainer}>
      <Text style={styles.assignmentTime}>{time}</Text>
      <Text style={styles.assignmentDate}>{dueDate}</Text>
    </View>
  </View>
);

export default function SubjectDetail() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.headerTop}>
            <View style={styles.titleContainer}>
              <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="chevron-back" size={32} color="#333" />
              </TouchableOpacity>
              <Text style={styles.subjectTitle}>수학2-2</Text>
            </View>
            <View style={styles.iconPlaceholder}>
              <Ionicons name="analytics" size={40} color="#468BD7" />
            </View>
          </View>
          <Text style={styles.teacherName}>정진우</Text>
        </View>

        {/* 현재 진행중인 퀴즈 */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.quizActiveCard}>
            {/* <View style={styles.quizActiveHeader}>
              <Text style={styles.quizActiveLabel}>현재 진행중인 퀴즈</Text>
            </View> */}
            <Text style={styles.quizActiveLabel}>현재 진행중인 퀴즈</Text>
            <Text style={styles.quizActiveTitle}>쪽지시험</Text>
            <View style={styles.quizActiveFooter}>
              <Text style={styles.quizActiveAction}>터치하여 참여하기</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 오답된 자료 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>오답된 자료</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>모두보기</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <View style={styles.documentCard}>
              <View style={styles.documentPreview} />
              <Text style={styles.documentTitle}>250927 수업자료</Text>
            </View>
            <View style={styles.documentCard}>
              <View style={styles.documentPreview} />
              <Text style={styles.documentTitle}>250930 수업자료 (1)</Text>
            </View>
            <View style={styles.documentCard}>
              <View style={styles.documentPreview} />
              <Text style={styles.documentTitle}>250930 수업자료 (2)</Text>
            </View>
          </ScrollView>
        </View>

        {/* 퀴즈 일정 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>퀴즈 일정</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>모두보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.whiteSection}>
            <QuizItem title="쪽지시험" daysLeft="D-7" dueDate="25/09/30" />
            <QuizItem title="중간고사" daysLeft="D-7" dueDate="25/10/07" />
            <QuizItem title="단원평가" daysLeft="D-20" dueDate="25/10/20" />
          </View>
        </View>

        {/* 과제 일정 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>과제 일정</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>모두보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.whiteSection}>
            <AssignmentItem 
              title="교과서 중단원 평가 풀어오기" 
              daysLeft="D-2" 
              time="23:59"
              dueDate="25/10/02"
            />
            <AssignmentItem 
              title="오답노트 작성" 
              daysLeft="D-14" 
              time="13:00"
              dueDate="25/10/14"
            />
            <AssignmentItem 
              title="주별평가 지문 제출" 
              daysLeft="D-17" 
              time="23:59"
              dueDate="25/10/17"
            />
          </View>
        </View>

        {/* 현재 성적 */}
        <View style={styles.section}>
          <View style={styles.scoreSection}>
            <View style={styles.scoreHeader}>
              <Text style={styles.scoreTitle}>현재 성적 (제출된 퀴즈 평균 포함)</Text>
              <TouchableOpacity style={styles.lectureButton}>
                <Text style={styles.lectureButtonText}>강</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.scoreValue}>75.34</Text>
            <TouchableOpacity style={styles.detailButton}>
              <Text style={styles.detailButtonText}>자세히보기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Buttons */}
      <TouchableOpacity style={[styles.fab, styles.fabPrimary]}>
        <Text style={styles.fabText}>강</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.fab, styles.fabSecondary]}>
        <Text style={styles.fabText}>강</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  scrollView: {
    flex: 1,
  },
  headerSection: {
    backgroundColor: '#E8E8E8',
    padding: 20,
    paddingTop: 60,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 8,
    padding: 5,
  },
  subjectTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'Pretendard',
  },
  iconPlaceholder: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teacherName: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Pretendard',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Pretendard',
  },
  seeMore: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Pretendard',
  },
  quizActiveCard: {
    backgroundColor: '#5B8BC7',
    borderRadius: 20,
    padding: 20,
  },
  quizActiveHeader: {
    marginBottom: 12,
  },
  quizActiveLabel: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  quizActiveTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    fontFamily: 'Pretendard',
  },
  quizActiveFooter: {
    alignItems: 'flex-end',
  },
  quizActiveAction: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  documentCard: {
    marginRight: 12,
    width: 100,
  },
  documentPreview: {
    width: 100,
    height: 140,
    backgroundColor: '#468BD7',
    borderRadius: 12,
    marginBottom: 8,
  },
  documentTitle: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Pretendard',
  },
  whiteSection: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
  },
  quizCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#468BD7',
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
  },
  quizInfo: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
    fontFamily: 'Pretendard',
  },
  quizDays: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  quizDate: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  assignmentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#468BD7',
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
  },
  assignmentInfo: {
    flex: 1,
  },
  assignmentTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 4,
    fontFamily: 'Pretendard',
  },
  assignmentDays: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  assignmentTimeContainer: {
    alignItems: 'flex-end',
  },
  assignmentTime: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Pretendard',
  },
  assignmentDate: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  scoreSection: {
    backgroundColor: '#468BD7',
    borderRadius: 20,
    padding: 20,
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  scoreTitle: {
    fontSize: 14,
    color: '#fff',
    flex: 1,
    fontFamily: 'Pretendard',
  },
  lectureButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#7B9FDB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lectureButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    fontFamily: 'Pretendard',
  },
  detailButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Pretendard',
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  fabPrimary: {
    backgroundColor: '#468BD7',
    right: 20,
    bottom: 100,
  },
  fabSecondary: {
    backgroundColor: '#9B5DE5',
    right: 20,
    bottom: 30,
  },
  fabText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
});