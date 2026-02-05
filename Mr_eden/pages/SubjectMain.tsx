import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, TextInput } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
      <View style={styles.subjectCardTop}>
        <Text style={styles.subjectTitle}>{subject}</Text>
        <Ionicons name={icon as any} size={30} color="#FFFFFF" />
      </View>
      <View style={styles.subjectCardBottom}>
        <Text style={styles.teacherName}>{teacher}</Text>
        <Text style={styles.classCode}>{code}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function SubjectMain() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [classCode, setClassCode] = useState('');

  const handleTabPress = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  const handleJoinClass = () => {
    // 수업 참여 
    console.log('Joining class with code:', classCode);
    setModalVisible(false);
    setClassCode('');
  };

  const handleCancel = () => {
    setModalVisible(false);
    setClassCode('');
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
          teacher="현우진"
          code="Q7J2ZK4M"
          icon="calculator"
        />
        <SubjectCard
          subject="국어2-2"
          teacher="김동욱"
          code="R1D8XH9C"
          icon="book"
        />
        <SubjectCard
          subject="도덕2-2"
          teacher="홍길동"
          code="Y5N3T0LW"
          icon="scale"
        />
        <TouchableOpacity 
          style={styles.addClassButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addClassText}>➕ 수업 참여</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 수업 참여 모달 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>수업 코드를 입력해주세요</Text>
            
            <TextInput
              style={styles.modalInput}
              placeholder="수업 코드"
              placeholderTextColor="#999"
              value={classCode}
              onChangeText={setClassCode}
              autoCapitalize="characters"
            />

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancel}
              >
                <Text style={styles.cancelButtonText}>취소</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.modalButton, styles.joinButton]}
                onPress={handleJoinClass}
              >
                <Text style={styles.joinButtonText}>수업 참여</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View>
        <SafeAreaView style={styles.tabBar} edges={['bottom']}>
          <TouchableOpacity 
            style={styles.tabItem} 
            onPress={() => handleTabPress('MainStudent')}
          >
            <Ionicons name="home-outline" size={24} color="#666" />
            <Text style={styles.tabTextInactive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="layers-outline" size={24} color="#468BD7" />
            <Text style={styles.tabText}>Subject</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}
          onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="settings-outline" size={24} color="#666" />
            <Text style={styles.tabTextInactive}>Setting</Text>
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#468BD7',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  subjectCardTop: {
    backgroundColor: '#5B8BC7',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subjectCardBottom: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subjectTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Pretendard',
  },
  teacherName: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Pretendard',
  },
  classCode: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    fontFamily: 'Pretendard',
  },
  addClassButton: {
    padding: 15,
    marginHorizontal: 60,
    borderRadius: 30,
    borderWidth: 0.7,
    borderColor: '#393939',
    alignItems: 'center',
    marginTop: 10,
  },
  addClassText: {
    color: '#666',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    width: '85%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    fontFamily: 'Pretendard',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'Pretendard',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  joinButton: {
    backgroundColor: '#5B8BC7',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Pretendard',
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Pretendard',
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
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
});