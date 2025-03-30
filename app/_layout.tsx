import { Stack } from "expo-router";
import '../global.css';
import { useFonts } from "expo-font";
import Colors from "@/components/Colors";
import { ActivityIndicator } from "react-native";
import '@/global.css'

const poppins = {
  "poppins-light": require('../assets/fonts/Poppins/Poppins-Light.ttf'),
  "poppins-regular": require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
  "poppins-medium": require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
  "poppins-bold": require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts(poppins);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={Colors.PRIMARY_G} />;
  }

  return <Stack screenOptions={{
    headerShown: false,
    statusBarBackgroundColor: Colors.PRIMARY_G,
  }} />;
}
