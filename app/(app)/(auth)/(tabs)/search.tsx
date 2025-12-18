import { useRouter } from "expo-router";
import {
  Button,
  Text,
  // TouchableOpacity,
  View,
} from "react-native";
// import Transition from "react-native-screen-transitions";
import useUserStore from "@/hooks/use-userstore";

const Search = () => {
  const router = useRouter();
  const { setIsGuest } = useUserStore();

  return (
    <View>
      <Text>Search</Text>
      <Button title="Go Login" onPress={() => setIsGuest(false)} />
    </View>
  );
};
export default Search;
