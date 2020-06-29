import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ComponentsScreen = () => {
    const name = 'santos';
    return (
        <View>
            <Text Style={styles.textStyle}>Component created Correctly!</Text>
            <Text>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 40
    },
    subHeaderStyle: {
        fontSize: 20
    }

});

export default ComponentsScreen;