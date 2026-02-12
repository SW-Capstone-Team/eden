import React, { useState, useEffect, useCallback } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from './module';

interface FindType {
  findType: '아이디' | '비밀번호';
}

function FindAccount() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [findType, setFindType] = useState<'아이디' | '비밀번호'>('아이디');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaProvider style={styles.container}>
      <TouchableOpacity style={styles.back}
        onPress={() => navigation.goBack()}
        ><Ionicons name="chevron-back" size={40} color="#000" />
      </TouchableOpacity>

      <View style={styles.typeSelector}>
        <TouchableOpacity 
          style={[styles.typeButton, {flex: 1}, findType === '아이디' && styles.selectedType]}
          onPress={() => setFindType('아이디')}
          >
          <Text style={[styles.typeText, findType === '아이디' && styles.selectedTypeText]}>아이디 찾기</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.typeButton, {flex: 1, marginLeft: 20}, findType === '비밀번호' && styles.selectedType]}
          onPress={() => setFindType('비밀번호')}
          >
          <Text style={[styles.typeText, findType === '비밀번호' && styles.selectedTypeText]}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.inputContainer}>
        {findType === "비밀번호" && (
          <>
          <Text style={styles.itemText}>아이디 입력</Text>
          <TextInput
            style={styles.input}
            placeholder="아이디"
            placeholderTextColor='#B7B7B7'
            value={id}
            onChangeText={setId}
          />
          </>
        )}
        <Text style={styles.itemText}>이메일 주소</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.input}
            placeholder="이메일 주소"
            placeholderTextColor='#B7B7B7'
            value={email}
            onChangeText={setEmail}
          />
          <Text style={{margin: 10, fontSize: 20}}>@</Text>
          <TextInput
            style={styles.input}
            placeholder=".com"
            placeholderTextColor='#B7B7B7'
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.proveButton]}>
            <Text style={styles.proveText}>인증요청</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="인증번호 입력"
            placeholderTextColor='#B7B7B7'
          />
        </View>
      </View>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFDFE',
    padding: 20,
    fontFamily: 'Pretendard',
    gap: 20
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
});

export default FindAccount;