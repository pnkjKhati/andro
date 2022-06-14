import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Pagin = () => {
  const [data, setData] = useState();
  const [sliceValue , setSliceValue] = useState(4)
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=100").then(res => {
      setData(res.data.results);
    });
  }, []);

  const onReached = () => {
      setSliceValue(sliceValue+5)
  }
  return (
    <>
        <FlatList
            data={data?.slice(0,sliceValue)}
            renderItem ={ ({item}) => <Card item={item}/>}
            keyExtractor={(item) => item.dob.date}
            onEndReachedThreshold={0.5}
            onEndReached ={onReached}
            
        />
    </>
  );
};

export default Pagin;

const styles = StyleSheet.create({});
