import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Ionicons } from '@expo/vector-icons';

type AssignmentItemProps = {
  title: string;
  date: string;
  time: string;
  score?: string;
};

const AssignmentItem = ({ title, date, time, score }: AssignmentItemProps) => (
  <TouchableOpacity style={styles.assignmentCard}>
    <View style={styles.assignmentHeader}>
      <Image style={styles.thumbnail} source={require('../assets/doc-thumbnail.png')} />
      <View style={styles.assignmentInfo}>
        <Text style={styles.assignmentTitle}>{title}</Text>
        <Text style={styles.dateTime}>{date} {time}</Text>
      </View>
    </View>
    {score && <Text style={styles.score}>{score}</Text>}
  </TouchableOpacity>
);

export default function SubjectDetail() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>수학2-2</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>현재 진행중인 과제</Text>
          <AssignmentItem
            title="도함수 활용"
            date="11/30"
            time="10:30"
          />
          <AssignmentItem
            title="함수의 연속성"
            date="11/30"
            time="15:30"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>이전 진행한 과제</Text>
          <AssignmentItem
            title="함수의 극한"
            date="11/28"
            time="23:59"
            score="75.34"
          />
          <AssignmentItem
            title="무한수열의 극한"
            date="11/27"
            time="23:59"
            score="88.52"
          />
          <AssignmentItem
            title="수열의 극한"
            date="11/25"
            time="23:59"
            score="92.11"
          />
        </View>
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#468BD7',
  },
  assignmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  assignmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 4,
  },
  assignmentInfo: {
    flex: 1,
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  dateTime: {
    fontSize: 14,
    color: '#666666',
  },
  score: {
    position: 'absolute',
    right: 16,
    top: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#468BD7',
  },
});