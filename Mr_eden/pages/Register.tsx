import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from './module';
import { SafeAreaProvider } from "react-native-safe-area-context";
// import supabase from '../supabaseClient';

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
  async function signUpUser(userData: UserSignUp) {
    const { id, password, name, email, birthdate, userType } = userData;

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if(authError) throw authError;
      else console.log('successfully signed up: ', authData);

      if(authData.user) {
        try {
          const { error: profileError } = await supabase.from('profiles').insert([
            {
              id: authData.user.id,
              login_id: id,
              email,
              name,
              birthdate,
              user_type: userType
            },
          ]);
    
          if(profileError) throw profileError;
          else console.log('successfully inserted in profiles table');
        } catch(profileError) {
          console.log(profileError);
        }
      }
    } catch(authError) {
      console.log(authError);
    } finally {
      navigation.navigate('Login');
    }
  }
  */

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
          style={[styles.typeButton, {flex: 1}, userType === '학생' && styles.selectedType]}
          onPress={() => setUserType('학생')}
        ><Image style={{marginHorizontal: 10}} source={require("../assets/backpack.png")} />
          <Text style={[styles.typeText, userType === '학생' && styles.selectedTypeText]}>학생</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.typeButton, {flex: 1, marginLeft: 20}, userType === '교사' && styles.selectedType]}
          onPress={() => setUserType('교사')}
        ><Image style={{marginHorizontal: 10}} source={require("../assets/chalkboard-user.png")} />
          <Text style={[styles.typeText, userType === '교사' && styles.selectedTypeText]}>교사</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.inputContainer}>
        <Text style={styles.itemText}>아이디 입력</Text>
        <View style={{flexDirection: 'row', gap: 10}}>
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
        <TextInput
          style={styles.input}
          placeholder="학교 이름을 입력하세요"
          placeholderTextColor='#B7B7B7'
        >
        </TextInput>
        <Text style={styles.itemText}>생년월일</Text>
        <View style={styles.dateInputs}>
          <TextInput
            style={[styles.input, {width: 142}]}
            placeholder="년도"
            placeholderTextColor='#B7B7B7'
            value={birthdate}
            onChangeText={setBirthdate}
          />
          <TextInput
            style={[styles.input, {width: 80}]}
            placeholder="월"
            placeholderTextColor='#B7B7B7'
          />
          <TextInput
            style={[styles.input, {width: 80}]}
            placeholder="일"
            placeholderTextColor='#B7B7B7'
          />
        </View>
        <Text style={styles.itemText}>이메일 주소</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {width: 141}]}
            placeholder="이메일 주소"
            placeholderTextColor='#B7B7B7'
            value={email}
            onChangeText={setEmail}
          />
          <Text style={{margin: 10, fontSize: 20}}>@</Text>
          <TextInput
            style={[styles.input, {width: 141}]}
            placeholder=".com"
            placeholderTextColor='#B7B7B7'
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, gap: 10}}>
          <TouchableOpacity style={[styles.proveButton]}>
          <Text style={styles.proveText}>인증요청</Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.input]}
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
    padding: 20,
    fontFamily: 'Pretendard'
  },
  back: {
    marginVertical: 20,
  },
  typeSelector: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  typeButton: {
    padding: 10,
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
    fontSize: 16,
    color: '#000',
    fontWeight: '600'
  },
  selectedTypeText: {
    color: '#fff',
  },
  inputContainer: {
    paddingTop: 10,
    paddingHorizontal: 20
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  },
  input: {
    flex: 1,
    borderWidth: 0.7,
    borderRadius: 35,
    borderColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 18,
    color: '#393939',
    fontWeight: '600'
  },
  dateInputs: {
    flexDirection: 'row',
    gap: 10,
  },
  proveButton: {
    backgroundColor: '#468BD7',
    borderRadius: 35,
    alignItems: 'center',
    marginBottom: 10,
    width: 100
  },
  proveText: {
    color: '#fff',
    fontSize: 18,
    padding: 10,
    fontWeight: '600'
  },
  submitButton: {
    backgroundColor: '#468BD7',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '600',
  },
});