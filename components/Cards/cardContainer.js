import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
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

            <ScrollView style={{ height: 55, /* backgroundColor: 'orange', */ width: '95%', alignSelf: 'center', paddingBottom: '135%', alignContent: 'space-around', }}>
                <View style={{flexDirection:'column'}}> 
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={styles.cardStyle}>
                            <View style={styles.design}>
                                <View style={styles.title}>
                                    <Text style={{ color: 'cyan', fontWeight: 'bold', paddingTop: 15,paddingLeft:10 }}>Sagar Pawar</Text>
                                    <Icon name="heart" size={15} color="red" style={{ paddingLeft: 15, paddingTop: 15, }} />
                                </View>
                                <Text style={{ color: 'rgb(145,146,150)', fontWeight: '200', paddingTop: 15 }}>Sagar Pawar</Text>
                                <Text style={{ color: 'rgb(145,146,150)', fontWeight: '200', paddingTop: 15 }}>23 mins ago</Text>
                                <Icon name="star" size={15} color="yellow" style={{ paddingLeft: 12 }} />

                                <View style={styles.imageContainer}>
                                    <Image
                                        style={{ width: '75%', height: '65%', }}
                                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                                    />
                                </View>
                            </View>

                        </View>
                        <View style={styles.cardStyle}>
                        <View style={styles.design}>
                                <View style={styles.title}>
                                    <Text style={{ color: 'cyan', fontWeight: 'bold', paddingTop: 15 ,paddingLeft:10}}>Sagar Pawar</Text>
                                    <Icon name="heart" size={15} color="red" style={{ paddingLeft: 15, paddingTop: 15, }} />
                                </View>
                                <Text style={{ color: 'rgb(145,146,150)', fontWeight: '200', paddingTop: 15 }}>Sagar Pawar</Text>
                                <Text style={{ color: 'rgb(145,146,150)', fontWeight: '200', paddingTop: 15 }}>23 mins ago</Text>
                                <Icon name="star" size={15} color="yellow" style={{ paddingLeft: 12 }} />

                                <View style={styles.imageContainer}>
                                    <Image
                                        style={{ width: '75%', height: '65%', }}
                                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                                    />
                                </View>
                            </View>

                        </View>

                    </View>
                    </View>
                </View>
                <View style={{flexDirection:'column'}}> 
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={styles.cardStyle}>
                            <View style={styles.design}>
                                <View style={styles.title}>
                                    <Text style={{ color: 'cyan', fontWeight: 'bold', paddingTop: 15,paddingLeft:10 }}>Sagar Pawar</Text>
                                    <Icon name="heart" size={15} color="red" style={{ paddingLeft: 15, paddingTop: 15, }} />
                                </View>
                                <Text style={{ color: 'rgb(145,146,150)', fontWeight: '200', paddingTop: 15 }}>Sagar Pawar</Text>
                                <Text style={{ color: 'rgb(145,146,150)', fontWeight: '200', paddingTop: 15 }}>23 mins ago</Text>
                                <Icon name="star" size={15} color="yellow" style={{ paddingLeft: 12 }} />

                                <View style={styles.imageContainer}>
                                    <Image
                                        style={{ width: '75%', height: '65%', }}
                                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                                    />
                                </View>
                            </View>

                        </View>
                        <View style={styles.cardStyle}>
                        <View style={styles.design}>
                                <View style={styles.title}>
                                    <Text style={{ color: 'cyan', fontWeight: 'bold', paddingTop: 15 ,paddingLeft:10}}>Sagar Pawar</Text>
                                    <Icon name="heart" size={15} color="red" style={{ paddingLeft: 15, paddingTop: 15, }} />
                                </View>
                                <Text style={{ color: 'rgb(145,146,150)', fontWeight: '200', paddingTop: 15 }}>Sagar Pawar</Text>
                                <Text style={{ color: 'rgb(145,146,150)', fontWeight: '200', paddingTop: 15 }}>23 mins ago</Text>
                                <Icon name="star" size={15} color="yellow" style={{ paddingLeft: 12 }} />

                                <View style={styles.imageContainer}>
                                    <Image
                                        style={{ width: '75%', height: '65%', }}
                                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                                    />
                                </View>
                            </View>

                        </View>

                    </View>
                    </View>
                </View>
            </ScrollView>

        )
    }
}


const styles = StyleSheet.create({
    container: {
       
        width: '95%',
    
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'space-around',
        paddingTop: '9%',
        paddingBottom: '9%',

    },

    cardStyle:
    {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 25,
       
        height: '85%'
      
    },
    design: {
        backgroundColor: 'rgb(41,43,51)',
        flex: 1,
        padding: 1,
        borderRadius: 25,

    },
    title: {
        flexDirection: 'row'
    },
    imageContainer: {
    
        bottom: '-5%',
        left: '6.5%',


    }
})