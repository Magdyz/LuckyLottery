import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TitleBox from './src/TitleBox';
import ButtonFunction from './src/ButtonFunction';


const App = () => {

  return (
    <SafeAreaView  style={styles.mainContainer}>
      <LinearGradient
        colors={['#f1faee', '#a2d2ff']}
        start={{
          x: 1,
          y: 0
        }}
        end={{
          x: 0,
          y: 1
        }}
        style={styles.box} >
        <TitleBox title='Lucky Generator' ></TitleBox>
        <View >
          <ButtonFunction buttonTitle='EUROMILLIONS' firstNumberOfTimes='5' firstNumbers='50' secondNumberOfTimes='2' secondNumber='12' />
          <ButtonFunction buttonTitle='LOTTO' firstNumberOfTimes='6' firstNumbers='59' secondNumberOfTimes='0' secondNumber='0' />
          <ButtonFunction buttonTitle='SET FOR LIFE' firstNumberOfTimes='5' firstNumbers='47' secondNumberOfTimes='1' secondNumber='10' />
        </View>



      </LinearGradient>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({

  box: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  mainContainer: {
    top: 10
  }

});

export default App;
