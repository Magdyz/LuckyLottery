import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EuroMillions = () => {
  // Create state variables to store the generated numbers
  const [mainNumbers, setMainNumbers] = useState([]);

  // Function to generate the numbers and update the state variables
  const generateNumbers = () => {
    // Create arrays to store the new numbers
    let newMainNumbers = [];
    let newLuckyStars = [];

    // Generate 5 unique main numbers between 1 and 50
    while (newMainNumbers.length < 6) {
      let randomNumber = Math.floor(Math.random() * 59) + 1;
      if (!newMainNumbers.includes(randomNumber)) {
        newMainNumbers.push(randomNumber);
      }
    }

    // Update the state variables with the new numbers
    setMainNumbers(newMainNumbers);
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

      </View>

      <View style={{ height: 20 }}></View>

       {/* Button to trigger the number generation */}
       <TouchableOpacity onPress={generateNumbers}>
        <Text style={styles.button}>LOTTO</Text>
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
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: '#DD403A',
    fontWeight: 'bold',
    fontSize: 20,
  },

  backgroundBox:{
        
    margin: 15, 
    backgroundColor: '#F5BE51', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 180, 
    width: 320, 
    borderRadius: 67
},
button: {
    padding: 10,
    backgroundColor: '#DD403A',
    height: 43,
    width: 100,
    textAlign: 'center',
    borderRadius: 67,
    fontSize: 15,
    color: 'white',
    fontWeight: "bold",
},

});

export default EuroMillions;
