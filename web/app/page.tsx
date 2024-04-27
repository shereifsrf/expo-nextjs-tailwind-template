"use client";

import "../globals.css";
import { Button } from "components";
import { View, Text } from "react-native";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div>
      <h1 className="text-green-600">My first template for nextjs and expo</h1>
      <Button />
      <View>
        <Text className="text-blue-500 font-bold">
          native from next package
        </Text>
      </View>
    </div>
  );
}
