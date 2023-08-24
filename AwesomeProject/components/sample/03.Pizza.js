import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const Pizza = () => {
    const [txt, setTxt] = useState('');

    return (
        <View style={{padding: 10}}>
            <TextInput 
                style={{height:40}}
                placeholder='Type here to translate!'
                onChangeText={val => setTxt(val)}
                defaultValue={txt}
            />
            <Text style={{padding:10, fontSize:42}}>
                {txt
                    .split(' ')
                    .map(word => word && '🍕')
                    .join(' ')}
            </Text>
        </View>
    );
};

export default Pizza;