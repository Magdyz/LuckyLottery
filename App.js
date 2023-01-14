import React from 'react';
import { View } from 'react-native';
import EuroMillions from './src/EuroMillions'
import Lotto from './src/Lotto';
import SetForLife from './src/SetForLife';
import { LinearGradient } from 'expo-linear-gradient';
import TitleBox from './src/TitleBox';

const App = () => {

  return (
    <View style={styles.container} >
      <LinearGradient 
        colors={['#DD403A', '#B38CB4']}
        start={{
          x: 0,
          y: 0
        }}
        end={{
          x: 1,
          y: 1
        }}
        style={styles.box} >
      <TitleBox></TitleBox>
      <EuroMillions></EuroMillions>
      <Lotto></Lotto>
      <SetForLife></SetForLife>
    </LinearGradient>
    </View >
    );
  };

const styles = {
  container: {
    /*backgroundColor: '#f5f5dc',*/
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  }
};

export default App;
