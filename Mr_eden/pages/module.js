import { Platform } from 'react-native';

const Ionicons = Platform.select({
  ios: () => {
    const Icon = require('react-native-vector-icons/Ionicons').default;
    Icon.loadFont(); // iOS 전용 폰트 로드
    return Icon;
  },
  android: () => {
    // 안드로이드 전용 스코프 패키지 사용
    return require('@react-native-vector-icons/ionicons').default;
  },
})(); // 즉시 실행하여 적절한 모듈을 할당

export default Ionicons;