import React from 'react';
import { ScrollView, StyleSheet, Text, Image, ImageBackground, Dimensions } from 'react-native';
import { Container, View, Button, Icon, Fab, Header } from 'native-base';

export default class DeveloperScreen extends React.Component {
  static navigationOptions = {
    title: 'Amoeba Application',
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
    var { height, width } = Dimensions.get('window');
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    return (
      <ImageBackground source={require('../assets/images/developer/about-app.png')} style={styles.backgroundImage}>
        <Fab
          active={!this.state.active}
          direction="down"
          containerStyle={{}}
          style={{ backgroundColor: '#5DCF87' }}
          position="topLeft"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="md-finger-print" />
          <Button style={{ backgroundColor: '#efeded' }} onPress={() => this.props.navigation.navigate('appVersion')}>
            <Image
              source={require('../assets/images/logoFIX.png')}
              resizeMode='contain'
              style={{ width: 20, height: 20 }}
            />
          </Button>
          <Button style={{ backgroundColor: '#DD5144' }} onPress={() => this.props.navigation.navigate('aboutUs')}>
            <Icon name="md-git-network" />
          </Button>
        </Fab>
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
  loginForm: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
});
