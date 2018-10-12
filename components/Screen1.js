import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardList from './Cards/cardList'
export default class Screen1 extends React.Component {
    render() {
        console.disableYellowBox = true
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textInput}>Explore</Text>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.borderIcon}>
                            <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>


                    <View style={styles.cardComponent}>
                        <CardList />
                    </View>  </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30,30,36)',
        paddingTop: 35,
       


    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start',
        height: 100,
        width: 50,
        marginBottom: 500,
        justifyContent: 'center',
        paddingLeft: 17


    },
    textInput: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',


    },
    searchContainer: {
        flex: 1,
        alignItems: 'center',
        height: 100,
        width: 90,
        marginBottom: 500,
        justifyContent: 'center',
        paddingRight: 18
    },
    searchIcon: {
        paddingLeft: 100,


    },
    cardComponent: {

        paddingTop: 5,
        paddingLeft: 25,
        //backgroundColor: 'skyblue',
        height: 450,
        width: 360,
        bottom: 500


    }


});
