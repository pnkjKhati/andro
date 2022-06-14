import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ item }) => {
  return (
    <View style={styles.c_container}>
      <View style={styles.leftContent}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: item.picture.large }} />
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.txtStyle}>
          {`${item.name.title} ${item.name.first} ${item.name.first}`}
        </Text>
        <Text style={styles.txtStyle}>
          {item.email}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  c_container: {
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    height: 200,
    padding: 5,
    flexDirection: "row",
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  leftContent: {
    margin: 2,
    width: "40%",
    padding: 10
  },
  rightContent: {
    margin: 2,
    paddingVertical: 10,
    flex: 1,
    alignItems: "center"
  },
  imgContainer: { flex: 1 },
  img: {
    flex: 1,
    borderRadius: 2
  },
  txtStyle: {
    fontWeight: "bold",
    color: "black"
  }
});
