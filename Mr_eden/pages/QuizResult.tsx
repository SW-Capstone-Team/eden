import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from './module';
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabBar from '../components/TabBar';

const myScore = 60;
const maxScore = 100;
const average = 63.95;
const median = 69;
const percentage = (myScore / maxScore) * 100;

export default function QuizResult() {
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
        <View style={styles.headerTitle}>
          <Text style={styles.titleText}>단원평가</Text>
          <Text style={styles.scoreText}>{myScore}/{maxScore}</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* 원형 진행률 */}
        <View style={styles.circleContainer}>
          <View style={styles.circleBackground}>
            <View style={[styles.circleProgress, { 
              transform: [{ rotate: `${(percentage * 3.6) - 90}deg` }] 
            }]} />
            <View style={styles.circleInner} />
          </View>
        </View>

        {/* 점수 정보 */}
        <View style={styles.scoreInfo}>
          <Text style={styles.myScoreLabel}>나의 점수</Text>
          <Text style={styles.myScoreValue}>{myScore}</Text>
          <Text style={styles.statsText}>평균: {average} / 중앙값: {median}</Text>
        </View>

        {/* 전체 성적 확인하기 버튼 */}
        <TouchableOpacity style={styles.detailButton}>
          <Text style={styles.detailButtonText}>전체 성적 확인하기</Text>
        </TouchableOpacity>
      </View>

      <TabBar activeTab="subject" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFDFE',
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
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'Pretendard',
    marginHorizontal: 10,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666',
    fontFamily: 'Pretendard',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  circleContainer: {
    marginBottom: 70,
  },
  circleBackground: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 12,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circleProgress: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 12,
    borderColor: '#468BD7',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  circleInner: {
    width: 176,
    height: 176,
    borderRadius: 88,
    backgroundColor: '#FAFDFE',
    borderWidth: 0.4,
    borderColor: '#000000',
  },
  scoreInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  myScoreLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    fontFamily: 'Pretendard',
  },
  myScoreValue: {
    fontSize: 48,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
    fontFamily: 'Pretendard',
  },
  statsText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Pretendard',
  },
  detailButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#333',
  },
  detailButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    fontFamily: 'Pretendard',
  },
});
