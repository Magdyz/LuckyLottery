import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ButtonFunction = (props) => {

    // Create state variables to store the generated numbers

    const [mainNumbers, setMainNumbers] = useState([]);
    const [luckyStars, setLuckyStars] = useState([]);
    let firstNumbers = props.firstNumbers;
    let firstNumberOfTimes = props.firstNumberOfTimes;
    let secondNumberOfTimes = props.secondNumberOfTimes;
    let secondNumber = props.secondNumber;

    // Function to generate the numbers and update the state variables

    const generateNumbers = () => {

        // Create arrays to store the new numbers

        let newMainNumbers = [];
        let newLuckyStars = [];

        // Generate 5 unique main numbers between 1 and 50

        while (newMainNumbers.length < firstNumberOfTimes) {
            let randomNumber = Math.floor(Math.random() * firstNumbers) + 1;
            if (!newMainNumbers.includes(randomNumber)) {
                newMainNumbers.push(randomNumber);
            }
        }

        // Generate 2 unique lucky stars between 1 and 12
        while (newLuckyStars.length < secondNumberOfTimes) {
            let randomNumber = Math.floor(Math.random() * secondNumber) + 1;
            if (!newLuckyStars.includes(randomNumber)) {
                newLuckyStars.push(randomNumber);
            }
        }

        // Update the state variables with the new numbers
        setMainNumbers(newMainNumbers);
        setLuckyStars(newLuckyStars);

    };

    return (

        <View style={styles.backgroundBox}>

            <View style={styles.numbersContainer}>
                {/* Map over the main numbers array and render a View component with a circular shape and containing text element with the number */}
                {mainNumbers.map((number, index) => (
                    <View key={index} style={styles.numberCircle}>
                        <Text style={styles.numberText}>{number}</Text>
                    </View>
                ))}

                {/* Map over the lucky stars array and render a View component with a circular shape and containing text element with the number */}
                {luckyStars.map((number, index) => (
                    <View key={index} style={styles.luckyNumberCircle}>
                        <Text style={styles.luckyNumberText}>{number}</Text>
                    </View>
                ))}

            </View>

            <View style={{ height: 22 }}></View>

            {/* Button to trigger the number generation */}

            <TouchableOpacity onPress={generateNumbers}>
            <LinearGradient
        colors={['#ebdb65','#e8e2ba','#ebdb65']}
        start={{
          x: 1,
          y: 0
        }}
        end={{
          x: 0,
          y: 1
        }}
        style={styles.button} >
                <Text style={styles.buttonText}>{props.buttonTitle}</Text>
                </LinearGradient>

            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({

    numbersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    numberCircle: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 3
    },

    numberText: {
        color: '#DD403A',
        fontWeight: 'bold',
        fontSize: 22,

    },

    backgroundBox: {

        margin: 7,
        backgroundColor: '#ADD0EA',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 350,
        borderRadius: 67,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3

    },

    buttonText: {

        height: 80,
        width: 192,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "600",
        fontFamily: 'Roboto'

    },    
    
    button: {
        paddingTop: 24,
        height: 80,
        width: 192,
        borderRadius: 67,
        shadowColor: 'black',
        shadowOffset: { width: 0.5, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3
    },

    luckyNumberText: {
        color: '#ffd60a',
        fontWeight: 'bold',
        fontSize: 22,
    },

    luckyNumberCircle: {

        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#03045e',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 3
    }
});


export default ButtonFunction;