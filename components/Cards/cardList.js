import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardContainer from './cardContainer'

export default class CardList extends React.Component {
    render() {
        return (

            <View style={style.container}>
                <CardContainer />
            </View>


        )
    }
}

const style = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',


    },
})
