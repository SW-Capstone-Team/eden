import { API_AOS, API_IOS } from "@env";
import { Platform } from "react-native";

const API_URL = (Platform.OS == 'android') ? API_AOS : API_IOS || '';

export default API_URL;