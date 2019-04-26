import React from 'react';
import { ScrollView, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Container, View, Button, Icon, Fab } from 'native-base';

export default class DeveloperScreen extends React.Component {
  static navigationOptions = {
    title: 'Developer',
    headerStyle: {
      backgroundColor: '#eb3b5a',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props)
    this.state = {
      active: 'false',
    };
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/images/developer/about-us.png')} style={styles.backgroundImage}>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});
