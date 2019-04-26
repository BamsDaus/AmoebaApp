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
import { MonoText } from '../../../components/StyledText';

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
                  Operator
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
                  <B>Operator</B> merupakan simbol atau karakter yang biasa dilibatkan dalam program untuk melakukan
                  sesuatu operasi atau manipulasi, seperti penjumlahan, pengurangan dan lain lain. {"\n\n"}
                </Text>

                <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                  Sifat-sifat Operator: {"\n"}
                </Text>
                <Text style={{ color: 'grey' }}>
                  1. Unary {"\n"}
                  Sifat Unary adalah operator yang hanya melibatkan sebuah operand pada suatu operasi.
                  Ada dua operator unary utama yaitu <B>increment</B> dan <B>decrement</B> operator.
                </Text>
                <View style={[styles.codeHighlightContainer, styles.homeScreenFilename, styles.jtal]}>
                  <MonoText style={styles.codeHighlightText}>
                    //Bentuk penulisan operator {"\n"}
                    //dengan sifat Unary{"\n"}
                    {"\t\t"}-a;
                  </MonoText>
                </View>
                <Text style={{ color: 'grey' }}>
                  2. Binary {"\n"}
                  Sifat Binary adalah operator yang melibatkan dua buah operand dan 
                  satu operator di tengah dua operand pada suatu operasi.
                </Text>
                <View style={[styles.codeHighlightContainer, styles.homeScreenFilename, styles.jtal]}>
                  <MonoText style={styles.codeHighlightText}>
                    //Salah satu contoh operator {"\n"}
                    //dengan sifat Binary{"\n"}
                    {"\t\t"}a+b;
                  </MonoText>
                </View>
                <Text style={{ color: 'grey' }}>
                  3. Ternary {"\n"}
                  Sifat Ternary pada operator adalah operator kondisi atau <B>Conditional Operator </B>
                  yang melibatkan tiga buah operand pada suatu operasi.
                </Text>
                <View style={[styles.codeHighlightContainer, styles.homeScreenFilename, styles.jtal]}>
                  <MonoText style={styles.codeHighlightText}>
                    //Salah satu contoh operator {"\n"}
                    //dengan sifat Ternary{"\n"}
                    {"\t"}pernyataan: expresi?pilhan1:pilihan2;
                  </MonoText>
                </View>

                <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                  {"\n"}Macam-macam operator: {"\n"}
                </Text>
                <Text style={{ color: 'grey' }}>
                  1. Operator Aritmatika {"\n"}
                  2. Operator Logika {"\n"}
                  3. Operator Increment dan Decrement {"\n"}
                  4. Operator Relational {"\n"}
                  5. Operator Bitwise {"\n"}
                  6. Operator Assignment {"\n"}
                </Text>
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
                <Button style={[styles.nextButton, styles.midBut]} onPress={() => this.props.navigation.navigate('aritmatikaScreen')}>
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
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=Ei3nBpyTtew');
  };
}

const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

const styles = StyleSheet.create({
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
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
    backgroundColor: '#5DCF87',
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