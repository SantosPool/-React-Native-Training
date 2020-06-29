import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello </Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go To List Demo"
      />
      {/* <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;
