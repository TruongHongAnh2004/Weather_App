import { Button, Text } from "@react-navigation/elements";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SearchResult } from "./type";
import searchItemComponent from "./SearchItemComponent";
import SearchItemComponent from "./SearchItemComponent";

export default function SearchScreen() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      flexDirection: "row",
      columnGap: 20,
      flexWrap: "wrap",
      marginBottom: 50,
      marginTop: 50
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 10,

    },
    cancel: {
      fontSize: 20,
      
    },

    listSearch: {
      paddingLeft: 20,
    },
    parentCancel: {
      justifyContent: "center"
    }
  });

  const textUser = (text: string) => {
    setText(text);

    if (text == "") {
      setSearchResult([]);
    } else {
      fetch(
        "https://api.weatherapi.com/v1/search.json?key=bcee342ca3ac483a962151415252111&q=" +
          text +
          "&lang=vi"
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResult(
            data.map(function (searchElement: any) {
              return {
                id: Number(searchElement.id),
                name: String(searchElement.name),
                region: String(searchElement.region),
                country: String(searchElement.country),
                lat: Number(searchElement.lat),
                lon: Number(searchElement.lon),
                url: String(searchElement.url),
              };
            })
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={textUser}
          value={text}
          placeholder="Tìm tên thành phố"
        />

        <TouchableOpacity style={styles.parentCancel} onPress={() => router.back()}>
          <Text style={styles.cancel}>Hủy</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.listSearch}>
        {searchResult.map(function (searchI, i) {
          return <SearchItemComponent key={i} searchResult={searchI} />;
        })}
      </ScrollView>
    </View>
  );
}
