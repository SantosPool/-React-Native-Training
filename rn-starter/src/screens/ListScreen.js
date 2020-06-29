import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 11', age: 1 },
        { name: 'Friend 2', age: 2 },
        { name: 'Friend 3', age: 3 },
        { name: 'Friend 4', age: 4 },
        { name: 'Friend 5', age: 5 },
        { name: 'Friend 6', age: 6 },
        { name: 'Friend 7', age: 7 },
    ];
    return (
        <FlatList
            horizontal={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
        />);
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 80
    },
});

export default ListScreen;