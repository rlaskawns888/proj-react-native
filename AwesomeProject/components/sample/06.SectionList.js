/**
 * https://reactnative.dev/docs/using-a-listview
 */
import React, { useState } from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});
  
const SectionListBasics = () => {
    return (
        <View style={styles.container}>
            <SectionList 
                sections={[
                    {
                        title: 'D', 
                        data: ['Devin', 'Dan', 'Dominic']
                    },
                    {
                        title: 'J',
                        data: [
                            'Jackson',
                            'James',
                            'Jillian',
                            'Jimmy',
                            'Joel',
                            'John',
                            'Julie',
                        ],
                    },
                    {
                        title: 'D', 
                        data: ['Devin', 'Dan', 'Dominic']
                    },
                    {
                        title: 'J',
                        data: [
                            'Jackson',
                            'James',
                            'Jillian',
                            'Jimmy',
                            'Joel',
                            'John',
                            'Julie',
                        ],
                    },
                    {
                        title: 'D', 
                        data: ['Devin', 'Dan', 'Dominic']
                    },
                    {
                        title: 'J',
                        data: [
                            'Jackson',
                            'James',
                            'Jillian',
                            'Jimmy',
                            'Joel',
                            'John',
                            'Julie',
                        ],
                    },
                ]}  
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}                
                keyExtractor={item => `basicListEntry-${item}`}
            />
        </View>
    );
};

export default SectionListBasics;