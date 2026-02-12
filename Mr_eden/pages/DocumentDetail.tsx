import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from './module';
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabBar from '../components/TabBar';

type MaterialItemProps = {
  title: string;
  uploadDate: string;
  uploadTime: string;
};

const MaterialItem = ({ title, uploadDate, uploadTime }: MaterialItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <TouchableOpacity 
      style={styles.materialCard}
      onPress={() => navigation.navigate('DocumentDetailView')}
    >
      <Image 
        source={require('../assets/study_document.png')} 
        style={styles.documentThumbnail} 
      />
      <View style={styles.materialInfo}>
        <Text style={styles.materialTitle}>{title}</Text>
        <Text style={styles.uploadInfo}>last update: {uploadDate} {uploadTime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function DocumentDetail() {
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
        <Text style={styles.headerTitle}>학습 자료 목록</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <MaterialItem 
          title="250913 수업요약" 
          uploadDate="25/09/13"
          uploadTime="14:25"
        />
        <MaterialItem 
          title="250922 수업요약 (1)" 
          uploadDate="25/09/22"
          uploadTime="18:49"
        />
        <MaterialItem 
          title="250922 수업요약 (2)" 
          uploadDate="25/09/23"
          uploadTime="10:21"
        />
        <MaterialItem 
          title="250925 수업요약" 
          uploadDate="25/09/25"
          uploadTime="23:10"
        />
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
  scrollContent: {
    padding: 20,
    paddingTop: 10,
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
  materialCard: {
    flexDirection: 'row',
    backgroundColor: '#468BD7',
    borderRadius: 20,
    padding: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 0.4,
    borderColor: '#000000',
  },
  documentThumbnail: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  materialInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  materialTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 40,
    fontFamily: 'Pretendard',
  },
  uploadInfo: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Pretendard',
  },
});
