import { Button, Text } from "@react-navigation/elements";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SearchResult } from "./type";

export default function SearchScreen() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/search.json?key=bcee342ca3ac483a962151415252111&q=Hong&lang=vi"
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResult({
          id: Number(data.id),
          name: String(data.name),
          region: String(data.region),
          country: String(data.country),
          lat: Number(data.lat),
          lon: Number(data.lon),
          url: String(data.url),
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      
      padding: 20,
      margin: 50,
      flexDirection: "row",
      columnGap: 20,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    cancel: {
      fontSize: 20,
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Tìm tên thành phố"
      />
      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text style={styles.cancel}>Hủy</Text>
      </TouchableOpacity>
    </View>
  );
}
