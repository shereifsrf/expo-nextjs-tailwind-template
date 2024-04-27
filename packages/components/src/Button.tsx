import { Pressable, Text } from "react-native";
// import { router } from "expo-router";

export function Button() {
  const handlePress = () => {
    console.log("Button pressed");
    // router.push("/about");
  };

  return (
    <Pressable className="bg-yellow-800 p-5 rounded-full" onPress={handlePress}>
      <Text className="text-green-500">Native Button</Text>
    </Pressable>
  );
}
