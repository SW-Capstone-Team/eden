import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image,Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from './module';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TabBar from '../components/TabBar';

type QuizItemProps = {
  title: string;
  time: string;
  dueDate: string;
};

const QuizItem = ({ title, time, dueDate }: QuizItemProps) => (
  <View style={styles.quizCardGrid}>
    <Text style={styles.quizTitle}>{title}</Text>
    <View style={styles.quizCardFooter}>
      <Text style={styles.quizDate}>{dueDate}</Text>
      <Text style={styles.quizTime}>{time}</Text>
    </View>
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

const currentUserScore = 75.34;

export default function SubjectDetail() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        // 과목 소개 섹션을 넘어가면 헤더에 제목 표시 (약 150px 기준)
        setIsScrolled(offsetY > 100);
      },
    }
  );

  return (
    <SafeAreaProvider style={styles.container}>

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
              {isScrolled && (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.headerSubjectTitle}>수학2-2 (현우진)</Text>
                </View>
              )}
            </View>
          </View>
        </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        {/* 과목 소개 */}
        <View style={styles.subjectIntroSection}>
          <View style={styles.headerTop}>
            <View style={styles.titleContainer}>

              <View style={styles.textPlaceholder}>
                <Text style={styles.subjectTitle}>수학2-2</Text>
                <Text style={styles.sectionTitle}>현우진</Text>
              </View>

              <View style={styles.iconPlaceholder}>
                <Ionicons name="calculator" size={60} color="#468BD7" />
              </View>

            </View>
          </View>
        </View>

        {/* 현재 진행중인 퀴즈 */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.quizActiveCard}>
            <Text style={styles.quizActiveLabel}>현재 진행중인 퀴즈</Text>
            <Text style={styles.quizActiveTitle}>쪽지시험</Text>
            <View style={styles.quizActiveFooter}>
              <Text style={styles.quizActiveAction}>터치하여 참여하기</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 학습 자료 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>학습 자료</Text>
              <TouchableOpacity onPress={() => navigation.navigate('DocumentDetail')}>
                <Text style={styles.seeMore}>모두보기</Text>
              </TouchableOpacity>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalScroll}
            >
              <View style={styles.documentCard}>
                <Image source={require('../assets/study_document.png')} style={styles.documentPreview} />
                <View style={styles.documentTitlePlaceholder}>
                  <Text style={styles.documentTitle}>250927 수업자료</Text>
                </View>
              </View>
              <View style={styles.documentCard}>
                <Image source={require('../assets/study_document.png')} style={styles.documentPreview} />
                <View style={styles.documentTitlePlaceholder}>
                  <Text style={styles.documentTitle}>250930 수업자료 (1)</Text>
                </View>
              </View>
              <View style={styles.documentCard}>
                <Image source={require('../assets/study_document.png')} style={styles.documentPreview} />
                <View style={styles.documentTitlePlaceholder}>
                  <Text style={styles.documentTitle}>250930 수업자료 (2)</Text>
                </View>
              </View>
              <View style={styles.documentCard}>
                <Image source={require('../assets/study_document.png')} style={styles.documentPreview} />
                <View style={styles.documentTitlePlaceholder}>
                  <Text style={styles.documentTitle}>250927 수업자료</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        {/* 퀴즈 일정 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>퀴즈 일정</Text>
              <TouchableOpacity>
                <Text style={styles.seeMore}>모두보기</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.whiteSection}>
              <View style={styles.quizGrid}>
                <QuizItem title="쪽지시험" time="11:30" dueDate="25/09/30" />
                <QuizItem title="중간고사" time="09:30" dueDate="25/10/07" />
                <QuizItem title="단원평가" time="13:30" dueDate="25/10/20" />
              </View>
            </View>
          </View>
        </View>

        {/* 과제 일정 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
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
        </View>

        {/* 현재 성적 */}
        <View style={styles.section}>
          <View style={styles.scoreSection}>
            <View style={styles.gradientOverlay} />
            <View style={styles.scoreContent}>
              <View style={styles.scoreHeader}>
                <Text style={styles.scoreTitle}>현재 성적 (제출된 퀴즈 평균 포함)</Text>
                <TouchableOpacity>
                  <Text style={[styles.seeMore, { color: '#FAFDFE' }]}>모두보기</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.scoreValue}>{currentUserScore}점</Text>
            </View>
          </View>
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
  headerSection: {
    backgroundColor: '#FAFDFE',
    padding: 20,
    // paddingTop: 60,
    marginTop: 40,
    paddingBottom: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 8,
  },
  subjectIntroSection: {
    backgroundColor: '#FAFDFE',
    padding: 30,
    paddingTop: 0,
    paddingLeft: 40,
    // marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPlaceholder: {
    gap: 30,
    flex: 1,
  },
  backButton: {
    marginRight: 8,
    padding: 5,
  },
  headerSubjectTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'Pretendard',
    flex: 1,
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
  sectionCard: {
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.01,
    shadowRadius: 6,
    borderWidth: 0.4,
    borderColor: '#000000',
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
    backgroundColor: '#468BD7',
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
  quizActiveHeader: {
    marginBottom: 12,
  },
  quizActiveLabel: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Pretendard',
    marginBottom: 4,
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
    height: 140,
    borderRadius: 12,
    backgroundColor: '#468BD7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentPreview: {
    width: 80,
    height: 90,
    marginBottom: 4,
  },
  documentTitlePlaceholder: {
    width: 100,
    height: 29,
  },
  documentTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Pretendard',
  },
  whiteSection: {
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  quizGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 11,
    justifyContent: 'space-between',
  },
  quizCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#468BD7',
    borderRadius: 20,
    padding: 10,
  },
  quizCardGrid: {
    width: '48%',
    backgroundColor: '#468BD7',
    borderRadius: 20,
    padding: 15,
    height: 85,
    justifyContent: 'space-between',
  },
  quizCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  quizInfo: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  quizTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
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
    borderRadius: 20,
    padding: 12,
    marginBottom: 11,
  },
  assignmentInfo: {
    flex: 1,
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 6,
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
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  assignmentDate: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
  scoreSection: {
    backgroundColor: '#27609F',
    borderRadius: 20,
    padding: 20,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.01,
    shadowRadius: 6,
    borderWidth: 0.4,
    borderColor: '#000000',
    overflow: 'hidden',
    position: 'relative',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: `${currentUserScore * (113/100)}%`,
    backgroundColor: '#468BD7',
    borderRadius: 20,
  },
  scoreContent: {
    position: 'relative',
    zIndex: 1,
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  scoreTitle: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
    fontFamily: 'Pretendard',
  },
  scoreValue: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    fontFamily: 'Pretendard',
  },
  detailButton: {

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