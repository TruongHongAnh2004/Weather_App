import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
//const logoImage = require("../assets/images/splash-icon.png");

export default function BMI() {
  const [weight, setWeight] = useState("0")
  const [height, setHeight] = useState("0")
  const [bmiResult, setBmiResult] = useState("0.00")

  //TouchableOpaCity nhấn (onpress) sẽ gọi xử lý hàm này ta tự định nghĩa 
  const calculator = ()=> {
    const weightVal=parseFloat(weight)
    const heightVal=parseFloat(height)/100
    const result= weightVal/ Math.pow(heightVal,2)
    setBmiResult(result.toFixed(2))
  }

  return (
    //Complete UI
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.tittleLable}>Weight (KG)</Text>
        <TextInput
          style={styles.input}
          value={weight}
          keyboardType="numeric"
          onChangeText={(text) => setWeight(text)}
        />
        <View style={styles.group}>
          <Text style={styles.tittleLable}>Height(CM)</Text>
          <TextInput
            style={styles.input}
            value={height}
            keyboardType="numeric"
            onChangeText={(text) => setHeight(text)}
          />
        </View>
        <View style={styles.group}>
          <Text style={[styles.tittleLable, { alignSelf: "center" }]}>
            BMI: {bmiResult}
          </Text>
        </View>
        <View style={styles.group}>
          <TouchableOpacity style={styles.button} onPress={calculator}>
            <Text style={styles.buttonText}>Compute</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: 'pink'
  },
  tittleLable: {
    fontSize: 20,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "lightblue",
    borderWidth: 1,
    padding: 20,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 30,
  },
  group: {
    marginTop: 20,
  },
});
