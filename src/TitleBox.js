import React from 'react';
import { View, Text } from 'react-native';


const TitleBox = () => {


    return (
            <View style={styles.backgroundBox}>
                <Text style={styles.text}>Lucky Generator</Text>
            </View>
    );
};

const styles = {

    text: {
        fontSize: 35,
        color: '#F5BE51',
        fontWeight: "bold"

    },

    backgroundBox:{
        
        margin: 15, 
        backgroundColor: '#17255A', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 70, 
        width: 300, 
        borderRadius: 67
    }
}

export default TitleBox;