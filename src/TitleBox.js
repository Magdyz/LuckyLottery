import React from 'react';
import { View, Text } from 'react-native';


const TitleBox = (props) => {


    return (
            <View style={styles.backgroundBox}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
    );
};

const styles = {

    text: {
        fontSize: 35,
        fontWeight: "bold",
        color: '#ffd60a'

    },

    backgroundBox:{
        
        margin: 15, 
        backgroundColor: '#03045e', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '10%', 
        width: '100%', 
    }
}

export default TitleBox;