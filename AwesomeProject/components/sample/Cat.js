import React from 'react';
import { Text, TextInput, View } from 'react-native';

const getFullName = (param1, param2, param3) => {
    return param1 + ' ' + param2 + ' ' + param3
};

const Cat = () => {
    const name = 'MIMI'
    return (
        <View>
            <Text>Hello, I am...</Text>
            <TextInput 
                style={{
                    height:40,
                    borderColor:'gray',
                    borderWidth:1,
                }}
                defaultValue='Name me!'
            />
        </View>
        // <>
        //     <Text>Hello, I'am {name}</Text>
        //     <Text>Hello, I'am {getFullName("A", "B", "C")}</Text>
        // </>
    )
}

export default Cat;