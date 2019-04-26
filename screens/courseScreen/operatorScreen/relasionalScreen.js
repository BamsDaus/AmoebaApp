import React from 'react';
import {
  Linking,
  WebView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  Image,
} from 'react-native';
import { Container, Button, Content, Icon, List, ListItem, SwipeRow } from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

export default class CourseScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FFA057',
    },
    headerTintColor: '#fff',
  };

  // constructor() {
  //   super();
  //   const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  //   this.state = {
  //     dataSource: ds.cloneWithRows(datas),
  //   };
  // }

  render() {
    return (
      <Container>
        <ScrollView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
          <Content>
            <Grid>
              <Col style={[styles.ColMateri]}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey' }}>
                  Operator Relasional
                </Text>
                <View
                  style={{
                    borderBottomColor: '#FFA057',
                    borderBottomWidth: 1,
                    marginBottom: 2,
                    marginTop: 2,
                  }}
                />
                <Text style={{ color: 'grey' }}>
                  Dua ekspresi dapat dibandingkan dengan menggunakan Relational dan Comparison Operators.
                  Misalnya, untuk menentukan apakah suatu variable memiliki nilai lebih besar atau lebih kecil
                  dan sebagainya, hal itu dapat ditentukan dengan menggunakan operator Relational and Comparison
                  Operators. dan Hasil operasi tersebut akan bernilai Benar (1) atau salah ( 0 ) yang merupakan
                  bilangan Boolean.
								</Text>
                <Image
                  source={require('../../../assets/images/relational-table.png')}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 320, height: 200 }}
                />
                {/* <Grid>
                  <Col>
                    <Touchable
                      style={styles.option}
                      background={Touchable.Ripple('#fff', false)}
                      onPress={this._handlePressYouTube}>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={styles.optionIconContainer}>
                          <Ionicons name="logo-youtube" size={22} color="#fff" />
                        </View>
                        <View style={styles.optionTextContainer}>
                          <Text style={styles.optionText}>Data Type Explanation</Text>
                        </View>
                      </View>
                    </Touchable>
                  </Col>
                </Grid> */}
              </Col>
            </Grid>
            <Grid>
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center', }} />
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Button style={[styles.nextButton, styles.midBut]} onPress={() => this.props.navigation.navigate('bitwiseScreen')}>
                  <Ionicons name="md-arrow-forward" size={22} color="#fff" />
                </Button>
              </Col>
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center', }} />
            </Grid>
          </Content>
        </ScrollView>
      </Container>
    );
  }

  _handlePressYouTube = () => {
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=Ei3nBpyTtew'); //done
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#FFA057',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
  ColMateri: {
    backgroundColor: '#fff',

    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,

    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.48,
    shadowRadius: 5.00,
    elevation: 3,
  },
  rightCol: {
    backgroundColor: '#e8e8e8',
    marginBottom: 20,
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5,

    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  listCss: {
    backgroundColor: '#fff',

    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,

    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.48,
    shadowRadius: 5.00,
    elevation: 3,
  },
  nextButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#FFA057'
  },
  midBut: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
    marginTop: 10
  }
});