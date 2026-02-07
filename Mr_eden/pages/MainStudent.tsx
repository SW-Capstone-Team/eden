import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Animated } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from './module';

// Ionicons.loadFont();


type SubjectItemProps = {
  subject: string;
  class: string;
  time: string;
};

const SubjectItem: React.FC<SubjectItemProps> = (props) => {
  // 과제 내용에 '시험', '고사' 등의 키워드가 있으면 시험으로 판단
  const isExam = props.class.includes('시험') || props.class.includes('고사') || props.class.includes('평가');
  return (
    <View style={[styles.subjectItem, isExam && styles.subjectItemExam]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.mainText, isExam && styles.mainTextExam]}>{props.subject}</Text>
        <Text style={[styles.mainText, isExam && styles.mainTextExam]}>{props.time}</Text>
      </View>
      <Text style={[styles.classText, isExam && styles.classTextExam]}>{props.class}</Text>
    </View>
  );
};

export default function MainStudent() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        setIsScrolled(offsetY > 50);
      },
    }
  );

  // 애니메이션 값들
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [270, 190],
    extrapolate: 'clamp',
  });

  const starMarginBottom = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [20, 10],
    extrapolate: 'clamp',
  });

  const textOpacity = scrollY.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  const textPosition = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeftGroup}>
          <Image source={require('../assets/hanyang.png')} style={{width: 25, height: 25}} />
          <Text style={styles.headerText}>한양중학교</Text>
        </View>
        <Text style={styles.headerText}>김하냥 님</Text>
      </View>

      <Animated.View style={[styles.achievementBox, { height: headerHeight }]}>
        <Animated.Image 
          source={require('../assets/star.png')} 
          style={[
            styles.starIcon,
            {
              marginBottom: starMarginBottom,
            }
          ]} 
        />
        <Animated.Text 
          style={[
            styles.achievementBoxText,
            {
              opacity: textOpacity,
              transform: [{ translateY: textPosition }],
            }
          ]}
        >
          3일째 과제 학습 달성!
        </Animated.Text>
      </Animated.View>

      {isScrolled && (
        <View style={styles.collapsedTextContainer}>
          <Text style={styles.collapsedText}>3일째 과제 학습 달성!</Text>
        </View>
      )}

      <Animated.ScrollView 
        style={styles.subjectList}
        showsVerticalScrollIndicator={false}
        decelerationRate={1}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <SubjectItem subject="English" time="4시간 남음" class="주제별표 자료 제출" />
        <SubjectItem subject="화학1" time="D-1" class="쪽지시험" />
        <SubjectItem subject="미적분" time="D-1" class="교과서 중단원 문제 풀어오기" />
        <SubjectItem subject="언어와 매체" time="D-3" class="필수어법 5개 암기하기" />
        <SubjectItem subject="생명과학1" time="D-4" class="중간평가" />
        <SubjectItem subject="언어와 매체" time="D-6" class="작품 분석 과제" />
        <SubjectItem subject="기하와 백터" time="D-7" class="중간고사"/>
        <SubjectItem subject="미적분1" time="D-10" class="중간고사" />
        <SubjectItem subject="기하와 백터" time="D-13" class="중단원 문제 풀이 과제" />
      </Animated.ScrollView>

      <View>
        <SafeAreaView style={styles.tabBar} edges={['bottom']} >
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="home-outline" size={24} color="#468BD7" />
            <Text style={styles.tabText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            onPress={() => navigation.navigate('SubjectMain')}
          >
            <Ionicons name="layers-outline" size={24} color="#666" />
            <Text style={[styles.tabText, styles.tabTextInactive]}>Subject</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.tabItem}
            onPress={() => navigation.navigate('Settings')}
          >
            <Ionicons name="settings-outline" size={24} color="#666" />
            <Text style={[styles.tabText, styles.tabTextInactive]}>Setting</Text>
          </TouchableOpacity>
        </SafeAreaView>  
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
    marginBottom: 20,
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
  achievementBox: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  achievementBoxText: {
    fontFamily: 'Pretendard',
    fontSize: 23,
    fontWeight: 'semibold',
    color: '#000',
  },
  starIcon: {
    width: 150,
    height: 150,
  },
  collapsedTextContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#FAFDFE',
  },
  collapsedText: {
    fontFamily: 'Pretendard',
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  mainText: {
    fontFamily: 'Pretendard',
    fontSize: 17,
    fontWeight: 'semibold',
    color: '#000',
  },
  subjectList: {
    flex: 1,
    paddingHorizontal: 31,
  },
  subjectItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#000000',
  },
  subjectItemExam: {
    backgroundColor: '#5B8BC7',
    borderColor: '#000000',
  },
  mainTextExam: {
    color: '#FFFFFF',
  },
  classText: {
    paddingTop: 30,
    fontSize: 17,
  },
  classTextExam: {
    color: '#FFFFFF',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
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