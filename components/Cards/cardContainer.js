import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }


    }

    componentWillMount() {
        fetch('http://localhost:3000/data/')
            .then(response => response.json())
            .then((jsonData) => { this.setState({ data: jsonData }), console.log(this.state.data) })



    }


    render() {
        return (

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', height: 220, width: 350 }}>
                    <View style={styles.cardStyle}>
                        <View style={styles.design}>
                            <View style={styles.title}>
                                <Text style={{ color: 'cyan', fontSize: '16', fontWeight: 'bold', paddingTop: 15 }}>Sagar Pawar</Text>
                                <Icon name="heart" size={20} color="red" style={{ paddingLeft: 28 }} />
                            </View>
                            <Text style={{ color: 'rgb(145,146,150)', fontSize: '16', fontWeight: '200', paddingTop: 15 }}>Sagar Pawar</Text>
                            <Text style={{ color: 'rgb(145,146,150)', fontSize: '12', fontWeight: '200', paddingTop: 15 }}>23 mins ago</Text>
                            <Icon name="star" size={15} color="yellow" style={{ paddingLeft: 12 }} />

                            <View style={styles.imageContainer}>
                                <Image
                                    style={{ width: 125, height: 95,  }}
                                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                                />
                            </View>
                        </View>

                    </View>
                    <View style={styles.cardStyle}>
                        <View style={styles.design}>
                            <Text style={{ color: 'white', fontSize: '12' }}>Sagar Pawar</Text>

                        </View>

                    </View>

                </View>



            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    cardStyle:
    {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 25,
    },
    design: {
        backgroundColor: 'rgb(41,43,51)',
        flex: 1,
        padding: 10,
        borderRadius: 25,

    },
    title: {
        flexDirection: 'row'
    },
    imageContainer: {
        //alignItems:'center',
        bottom: -15,
        left: 10,
        height: 95,
        width: 125,
       
    }
})