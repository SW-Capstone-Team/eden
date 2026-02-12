import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from './module';
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabBar from '../components/TabBar';

export default function DocumentDetailView() {
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
        <Text style={styles.headerTitle}>250913 수업요약</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 1. 제곱근의 뜻 */}
        <View style={styles.section}>
          <Text style={styles.mainTitle}>1. 제곱근의 뜻</Text>
          
          <View style={styles.subsection}>
            <Text style={styles.subtitle}>(1) 제곱근</Text>
            <Text style={styles.content}>
              어떤 수 x를 제곱하여 a가 될 때, 즉 x^2=a일 때, x를 a의 제곱근이라 한다.
            </Text>
            <Text style={styles.content}>
              ex{'>'} 4의 제곱근: -2, 2
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subtitle}>(2) 제곱근의 개수</Text>
            <Text style={styles.content}>
              ① 양수의 제곱근은 양수, 음수 2개가 있고, 절댓값은 서로 같다.
            </Text>
            <Text style={styles.content}>
              ② 0의 제곱근은 0 1개이다.
            </Text>
            <Text style={styles.content}>
              ③ 음수의 제곱근은 생각하지 않는다.
            </Text>
            <Text style={styles.content}>
              ※ 양수의 제곱근을 구할 때 양수만 구하지 않도록 주의
            </Text>
          </View>
        </View>

        {/* 2. 제곱근의 표현 */}
        <View style={styles.section}>
          <Text style={styles.mainTitle}>2. 제곱근의 표현</Text>
          
          <View style={styles.subsection}>
            <Text style={styles.subtitle}>(1) 제곱근을 나타내기 위하여 기호 √를 사용하는데 이것을 근호라 하고, '제곱근' 또는 '루트'라 읽는다.</Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subtitle}>(2) 양수 a의 제곱근 중 양수인 것을 양의 제곱근, 음수인 것을 음의 제곱근이라 하고 다음과 같이 나타낸다.</Text>
            <Text style={styles.content}>
              양의 제곱근 → √a
            </Text>
            <Text style={styles.content}>
              음의 제곱근 → -√a
            </Text>
            <Text style={styles.content}>
              이때 √a와 -√a를 한꺼번에 ±√a로 나타내기도 한다.
            </Text>
            <Text style={styles.content}>
              ex{'>'} 2의 양의 제곱근: √2, 2의 음의 제곱근: -√2
            </Text>
            <Text style={styles.content}>
              즉 2의 제곱근은 ±√2이다.
            </Text>
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
    paddingHorizontal: 15,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
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
    gap: 8,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'Pretendard',
    marginLeft: 10,
    marginTop: 10,
  },
  section: {
    marginBottom: 30,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
    fontFamily: 'Pretendard',
  },
  subsection: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'Pretendard',
  },
  content: {
    fontSize: 15,
    color: '#555',
    lineHeight: 24,
    marginBottom: 4,
    fontFamily: 'Pretendard',
  },
});
