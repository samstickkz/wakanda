import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const navigateToHome = () => {
    // Navigate to the Home screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Image style={styles.onlogo} source={require("./assets/Cards.png")} />
        <View style={styles.h1view}>
          <Text style={styles.h1t}>Seamless trading</Text>
        </View>
        <Text style={styles.h2t}>
          Buy, sell and exchange cryptocurrencies.{" "}
        </Text>

        <TouchableOpacity style={styles.btnON} onPress={navigateToHome}>
          <Text style={styles.getbtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  body: {
    padding: 16,
  },

  onlogo: {
    width: 377,
    height: 431,
  },
  h1t: {
    marginTop: 40,
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
  },
  h2t: {
    color: "#A7A7CC",
    fontSize: 22,
    marginTop: 12,
  },
  h1view: {
    width: 300,
    color: "red",
  },
  btnON: {
    height: 54,
    backgroundColor: "#9D62D9",
    borderRadius: 5,
    marginTop: 61,
    alignItems: "center",
  },
  getbtn: {
    marginTop: 15,
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
});

export default LoginScreen;
