import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from './module';
import { SafeAreaProvider } from "react-native-safe-area-context";
import API_URL from '../config';
import axios from "axios";

interface UserSignUp {
  id: string;
  password: string;
  name: string;
  email: string;
  birthdate: string;
  userType: '학생' | '교사';
}

export default function Register() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [userType, setUserType] = useState<'학생' | '교사'>('학생');

  const handleSubmit = () => {
    // signUpUser({id, password, name, email, birthdate, userType});
    console.log('회원가입:', { id, password, name, email, birthdate, userType });
  };
  
  /*
  const signUpUser = useCallback(async () => {
    try {
      await axios.post(`${API_URL}/api/auth/register`, {
        "id": `${id}`,
        "password": `${password}`,
        "name": `${name}`,
        "email": `${email}`,
        "birthdate": `${birthdate}`,
        "userType": `${userType}`,
      });
    } catch (error) {
      const errorRes = (error as AxiosError).response;
      if(errorRes) {
        Alert.alert('알림', errorRes.data.message);
      }
    }
  }, [id, password, name, email, birthdate, userType, password]);
  */

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider style={styles.container}>
      <TouchableOpacity style={{marginTop: 40}}
        onPress={() => navigation.goBack()}
        ><Ionicons name="chevron-back" size={40} color="#000" />
      </TouchableOpacity>
      
      <View style={styles.typeSelector}>
        <TouchableOpacity 
          style={[styles.typeButton, userType === '학생' && styles.selectedType]}
          onPress={() => setUserType('학생')}
          ><Image style={{margin: 10}} source={require("../assets/backpack.png")} />
          <Text style={[styles.typeText, userType === '학생' && styles.selectedTypeText]}>학생</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.typeButton, userType === '교사' && styles.selectedType]}
          onPress={() => setUserType('교사')}
          ><Image style={{margin: 10}} source={require("../assets/chalkboard-user.png")} />
          <Text style={[styles.typeText, userType === '교사' && styles.selectedTypeText]}>교사</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.inputContainer}>
        <Text style={styles.itemText}>아이디 입력</Text>
        <View style={styles.rowinputs}>
          <TextInput
            style={styles.input}
            placeholder="6~20자"
            placeholderTextColor='#B7B7B7'
            value={id}
            onChangeText={setId}
          />
          <TouchableOpacity style={styles.proveButton}>
          <Text style={styles.proveText}>중복확인</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.itemText}>비밀번호 입력</Text>
        <TextInput
          style={styles.input}
          placeholder="영문, 숫자, 특수문자 포함 8~20자"
          placeholderTextColor='#B7B7B7'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.itemText}>비밀번호 확인</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 재입력"
          placeholderTextColor='#B7B7B7'
          secureTextEntry
        />
        <Text style={styles.itemText}>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="이름을 입력하세요"
          placeholderTextColor='#B7B7B7'
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.itemText}>소속학교</Text>
        <View style={styles.input}>
        <TextInput
          style={[styles.itemText, {padding: 0}]}
          placeholder="학교 이름을 입력하세요"
          placeholderTextColor='#B7B7B7'
        ></TextInput>
        <TouchableOpacity><Image style={{marginTop: 2, marginRight: 10}} source={require("../assets/search.png")}/></TouchableOpacity>
        </View>
        <Text style={styles.itemText}>생년월일</Text>
        <View style={styles.rowinputs}>
          <TextInput
            style={[styles.input, {flex: 0, width: 142}]}
            placeholder="년도"
            placeholderTextColor='#B7B7B7'
            value={birthdate}
            onChangeText={setBirthdate}
          />
          <TextInput
            style={styles.input}
            placeholder="월"
            placeholderTextColor='#B7B7B7'
          />
          <TextInput
            style={styles.input}
            placeholder="일"
            placeholderTextColor='#B7B7B7'
          />
        </View>
        <Text style={styles.itemText}>이메일 주소</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.input}
            placeholder="이메일 주소"
            placeholderTextColor='#B7B7B7'
            value={email}
            onChangeText={setEmail}
          />
          <Text style={{paddingHorizontal: 10, paddingTop: 15, fontSize: 20}}>@</Text>
          <TextInput
            style={styles.input}
            placeholder="naver.com"
            placeholderTextColor='#B7B7B7'
          />
        </View>
        <View style={styles.rowinputs}>
          <TouchableOpacity style={styles.proveButton}>
          <Text style={styles.proveText}>인증요청</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="인증번호 입력"
            placeholderTextColor='#B7B7B7'
           />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>회원가입</Text>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFDFE',
    paddingHorizontal: 20,
    fontFamily: 'Pretendard'
  },
  typeSelector: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 20
  },
  typeButton: {
    flex: 1,
    paddingHorizontal: 10,
    marginVertical: 20,
    height: 40,
    flexDirection: 'row',
    borderRadius: 35,
    borderWidth: 0.5,
    borderColor: '#000',
  },
  selectedType: {
    backgroundColor: '#468BD7',
    borderColor: '#468BD7',
  },
  typeText: {
    paddingTop: 8,
    fontSize: 15,
    color: '#000',
    fontWeight: '600'
  },
  selectedTypeText: {
    color: '#fff',
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    borderWidth: 0.7,
    borderRadius: 35,
    borderColor: '#000000',
    paddingVertical: 7,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    color: '#393939',
    fontWeight: '600'
  },
  rowinputs: {
    flexDirection: 'row',
    gap: 10,
  },
  proveButton: {
    height: 40,
    marginVertical: 10,
    backgroundColor: '#468BD7',
    borderRadius: 35,
    alignItems: 'center',
    width: 100
  },
  proveText: {
    color: '#fff',
    fontSize: 18,
    padding: 5,
    fontWeight: '600'
  },
  submitButton: {
    backgroundColor: '#468BD7',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '600',
  },
});