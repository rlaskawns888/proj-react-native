import React from 'react';
import { Text, View, Image } from 'react-native';

const Cat = props => {
    return (
        <View>
            <Text>Hello, I am {props.name}</Text>
        </View>
    )
};

const Cafe = () => {
    return (
        <View>
            <Text>Welcome! </Text>
            <Cat name="A"/>
            <Cat name="B"/>
            <Cat name="C"/>
            <Image 
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
                }}
                style={{width: 50, height:50}}
            />
        </View>
    )
};

export default Cafe;