import { Text } from "@react-navigation/elements";
import { useEffect } from "react";
import { View } from "react-native";

export default function SearchScreen() {
  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/search.json?key=bcee342ca3ac483a962151415252111&q=Hong&lang=vi"
    )
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <Text>hjkkjsdfh</Text>
    </View>
  );
}
