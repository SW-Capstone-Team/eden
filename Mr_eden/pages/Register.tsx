import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// Ionicons.loadFont();
import Ionicons from './module';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Register() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [userType, setUserType] = useState<'학생' | '교사'>('학생');

  const handleSubmit = () => {
    // 회원가입 로직 구현
    console.log('회원가입:', { id, password, name, email, birthdate, userType });
  };

  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider style={styles.container}>
      <View style = {styles.back}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          ><Ionicons name="chevron-back" size={40} color="#000" />
          </TouchableOpacity>
      </View>
      
      <View style={styles.typeSelector}>
        <TouchableOpacity 
          style={[styles.typeButton, userType === '학생' && styles.selectedType]}
          onPress={() => setUserType('학생')}
        ><Image source={require("../assets/backpack.png")} />
          <Text style={[styles.typeText, userType === '학생' && styles.selectedTypeText]}>학생</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.typeButton, userType === '교사' && styles.selectedType]}
          onPress={() => setUserType('교사')}
        >
          <Text style={[styles.typeText, userType === '교사' && styles.selectedTypeText]}>교사</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="6~20자"
          placeholderTextColor='#B7B7B7'
          value={id}
          onChangeText={setId}
        />
        <TextInput
          style={styles.input}
          placeholder="영문,숫자,특수문자 포함 8~20자"
          placeholderTextColor='#B7B7B7'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호 재입력"
          placeholderTextColor='#B7B7B7'
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="이름을 입력하세요"
          placeholderTextColor='#B7B7B7'
          value={name}
          onChangeText={setName}
        />
        <View style={styles.dateInputs}>
          <TextInput
            style={[styles.input, styles.dateInput]}
            placeholder="년도"
            placeholderTextColor='#B7B7B7'
            value={birthdate}
            onChangeText={setBirthdate}
          />
          <TextInput
            style={[styles.input, styles.dateInput]}
            placeholder="월"
            placeholderTextColor='#B7B7B7'
          />
          <TextInput
            style={[styles.input, styles.dateInput]}
            placeholder="일"
            placeholderTextColor='#B7B7B7'
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="이메일 주소"
          placeholderTextColor='#B7B7B7'
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>회원가입</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFEFF',
    padding: 20,
  },
  back: {
    marginVertical: 20,
  },
  typeSelector: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 30,
    justifyContent: 'space-between'
  },
  typeButton: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedType: {
    backgroundColor: '#468BD7',
    borderColor: '#468BD7',
  },
  typeText: {
    fontSize: 16,
    color: '#000',
  },
  selectedTypeText: {
    color: '#fff',
  },
  inputContainer: {
    gap: 10,
    padding: 20,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 35,
    borderColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontSize: 24,
    color: '#B7B7B7',
  },
  dateInputs: {
    flexDirection: 'row',
    gap: 10,
  },
  dateInput: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#468BD7',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '600',
  },
});