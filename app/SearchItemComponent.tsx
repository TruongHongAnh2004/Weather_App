import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SearchResult } from "./type";
import { router } from "expo-router";

function SearchItemComponent(props: { searchResult: SearchResult }) {
  return (
    <View>
      <TouchableOpacity onPress={() => router.push({ pathname: "/", params: { post: props.searchResult.name } })}>
        <Text style={styles.fontColor}>
          {props.searchResult.name}, {props.searchResult.country}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  fontColor: {
    fontSize: 20,
  },
});

export default SearchItemComponent;
