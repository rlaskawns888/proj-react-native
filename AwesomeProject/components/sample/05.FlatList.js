/**
 * https://reactnative.dev/docs/using-a-listview
 */
import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

const FlatData = [
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
];

const FlatListBasics = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={FlatData}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    )
};

export default FlatListBasics;