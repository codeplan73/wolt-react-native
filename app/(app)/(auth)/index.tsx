// import { Stack } from "@/components/Stack";
// import { Colors } from "@/constants/theme";
// import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Button,
  StyleSheet,
  Text,
  // TouchableOpacity,
  View,
} from "react-native";
// import Transition from "react-native-screen-transitions";
import useUserStore from "@/hooks/use-userstore";

const Index = () => {
  const router = useRouter();
  const { setIsGuest } = useUserStore();

  return (
    <View>
      <Text>My Inside Page</Text>
      <Button title="Go Login" onPress={() => setIsGuest(false)} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
