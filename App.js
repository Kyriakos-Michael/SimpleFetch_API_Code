import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';

import api from './utilities/fetch';

// Global Component
export default class App extends React.Component {
constructor () {
super ();
this.state = {
  roverName: '', 
  
 }
}   
componentDidMount () {
api.getRovers().then((res) => {
  this.setState ({
    roverName: res.rovers[0].status
  })
})
}


// Component Render View
  render() {
    return (
      <View style={styles.container}>
    <Text style={styles.text}>Rover: {this.state.roverName}</Text>
    <Text>  {this.state.roverName}  </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text : {
        fontSize: 30,
        borderColor: '#ffffff',
        borderRadius: 30
  }
});
