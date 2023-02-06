import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const TitleBox = (props) => {

    return (
        <View style={styles.backgroundBox} >

            <Image
                source={require('../assets/icon.png')}
                style={{ opacity: 0.8, top: 1, width: 72, height: 72, marginRight: -5 }}
            />
            <Text style={styles.text}>{props.title}</Text>
        </View>

    );
};

const styles = StyleSheet.create({

    text: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#03045e',
        opacity: 0.8,
        textShadowColor: 'white',
        textShadowOffset: { width: 0.1, height: 0.1 },
        textShadowRadius: 2,


    },

    backgroundBox: {

        top: 1,
        margin: 15,
        marginLeft: 1,
        display: 'flex',
        alignItems: 'center',
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',

    }
})

export default TitleBox;