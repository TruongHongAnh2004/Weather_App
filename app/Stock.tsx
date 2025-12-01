import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
//const logoImage = require("../assets/images/splash-icon.png");

export default function Stock() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.texttop}>VIN GROUP</Text>
        <Text style={styles.textmid}>VIN</Text>
        <Text style={styles.textlast}>8.700 (-1.5837%)</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text>VIN GROUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>FLC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>VIETJET</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>MASSAN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>VINAMILK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>SRC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>HSBC</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.button}>
          <Text>SAM HOLDING</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>PETROLIMEX</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "row",
    flexWrap:"wrap",

  },
  button: {
    width: 100,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor:"lightgray",
    fontSize: 30,
    justifyContent: "center",
    alignItems:"center",
    margin:10,
    marginRight:20
  },
  texttop:{
    fontSize: 30
  },
  textmid:{
    fontSize: 40
  },
  textlast:{
    fontSize: 30,
    color:"red"
  }
});
