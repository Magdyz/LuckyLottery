import React from 'react';
import { View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TitleBox from './src/TitleBox';
import ButtonFunction from './src/ButtonFunction';


const App = () => {
  

  return (
    <View style={styles.container} >
      <LinearGradient 
        colors={['#a2d2ff', '#f1faee']}
        start={{
          x: 1,
          y: 0
        }}
        end={{
          x: 0,
          y: 1
        }}
        style={styles.box} >      
            
      <TitleBox title = 'Lucky Generator' ></TitleBox>

      <ScrollView >
      <ButtonFunction buttonTitle = 'EUROMILLIONS' firstNumberOfTimes = '5' firstNumbers =  '50' secondNumberOfTimes = '2' secondNumber = '12'/>
      <ButtonFunction buttonTitle = 'LOTTO' firstNumberOfTimes = '6' firstNumbers =  '59' secondNumberOfTimes = '0' secondNumber = '0'/>
      <ButtonFunction buttonTitle = 'SETFORLIFE' firstNumberOfTimes = '5' firstNumbers =  '47' secondNumberOfTimes = '1' secondNumber = '10'/>
      </ScrollView>


    </LinearGradient>
    </View >
    );
  };

const styles = {

  box: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  }
};

export default App;
