import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Linking } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

type CustomCheckboxProps = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

// 커스텀 체크박스
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onValueChange(!value)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value }}
      style={[
        styles.checkboxBox,
        value ? styles.checkboxBoxChecked : styles.checkboxBoxUnchecked,
      ]}
    >
      {value && <Text style={styles.checkMark}>✓</Text>}
    </TouchableOpacity>
  );
};

function Login() {
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [saveId, setSaveId] = useState(false);

  const toggleAccount = () => {
    Linking.openURL("./Register.tsx");
  };

  const handleLogin = async () => {
    try {
      if (saveId && displayName) {
        await AsyncStorage.setItem("savedId", displayName);
        console.log("아이디 저장됨:", displayName);
      }
      // 로그인 로직 들어갈 자리
      console.log("로그인/회원가입 처리 (시뮬레이션):", displayName);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("savedId");
      if (saved) {
        setDisplayName(saved);
        setSaveId(true);
      }
    })();
  }, []);

  return (
    <SafeAreaProvider style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="ID"
            style={styles.input}
            autoCapitalize="none"
            value={displayName}
            onChangeText={setDisplayName}
            autoCorrect={false}
          />

          <TextInput
            placeholder="PASSWORD"
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            textContentType="password"
            autoCorrect={false}
          />
        </View>

        <View style={styles.imageview}>
          <Image 
            //source={require("../assets/logo.png")}
            style={styles.logoimage}
          />
        </View>

        <View style={styles.checkboxAndSwitchRow}>
          <View style={styles.checkboxRow}>
            <CustomCheckbox value={saveId} onValueChange={setSaveId} />
            <Text style={styles.checkboxLabel}>아이디 저장</Text>
          </View>

          <Text style={styles.switchText} onPress={toggleAccount}>회원가입</Text>
        </View>

        <View style={styles.tabview}>
          <TouchableOpacity style={styles.tab} onPress={handleLogin}>
            <Text style={styles.tabText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor={"transparent"} translucent={true} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safearea: { 
    flex: 1, 
  },
  container: { 
    flex: 1, 
    paddingVertical: 30, 
    paddingHorizontal: 20, 
    backgroundColor: "#FDFEFF", 
  },
  imageview: { 
    flexDirection: "row", 
  },
  logoimage: { 
    alignItems: "center", 
    marginLeft: "auto", 
    marginRight: "auto", 
  },

  inputWrapper: { 
    paddingVertical: 15, 
    marginTop: 40, 
  },
  input: { 
    borderWidth: 0.5, 
    borderRadius: 35, 
    borderColor: "#000000",
    paddingVertical: 10, 
    paddingHorizontal: 30, 
    color: "#B7B7B7",
    fontWeight: "semibold",
    fontSize: 24,
    lineHeight: 50,
    marginTop: 10, 
  },

  checkboxAndSwitchRow: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    marginTop: 12, 
    marginBottom: 12,
  },
  checkboxRow: { 
    flexDirection: "row", 
    alignItems: "center", 
  },

  checkboxBox: { 
    width: 22, 
    height: 22, 
    borderRadius: 5, 
    borderWidth: 0.5, 
    borderColor: "#000000", 
    alignItems: "center", 
    justifyContent: "center", 
  },
  checkboxBoxUnchecked: { 
    backgroundColor: "#ffffff", 
  },
  checkboxBoxChecked: { 
    backgroundColor: "#468BD7", 
  },
  checkMark: { 
    color: "#ffffff", 
    fontSize: 18, 
    lineHeight: 20, 
  },
  checkboxLabel: { 
    fontSize: 18, 
    fontWeight: "semibold", 
    color: "#393939", 
    marginLeft: 8, 
  },

  tabview: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
  },
  tab: { 
    backgroundColor: "#468BD7", 
    paddingHorizontal: 20, 
    paddingVertical: 15, 
    borderRadius: 50, 
    alignItems: "center", 
    justifyContent: "center", 
    width: "100%", 
    marginBottom: 10, 
  },
  tabText: { 
    fontWeight: "semibold", 
    fontSize: 30, 
    color: "#FFFFFF", 
  },
  switchText: { 
    paddingHorizontal: 8, 
    paddingVertical: 6, 
    fontWeight: "semibold", 
    fontSize: 18, 
    color: "#393939", 
  },
});

export default Login;