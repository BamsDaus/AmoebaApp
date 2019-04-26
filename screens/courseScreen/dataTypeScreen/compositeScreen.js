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
} from 'react-native';
import { Container, Button, Content, Icon, List, ListItem, SwipeRow } from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

export default class CourseScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#738FF5',
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
                  Tipe Data Composite
                </Text>
                <View
                  style={{
                    borderBottomColor: '#738FF5',
                    borderBottomWidth: 1,
                    marginBottom: 2,
                    marginTop: 2,
                  }}
                />
                <Text style={{ color: 'grey' }}>
                  Tipe data composite adalah tipe data bentukan yang terdiri dari dua atau lebih tipe data primitive. {"\n"}
                </Text>
                <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                  Tipe Data Array
                </Text>
                <Text style={{ color: 'grey' }}>
                  Array atau sering disebut sebagai larik adalah tipe data yang sudah terstruktur dengan baik,
                  meskipun masih sederhana. Array mampu menyimpan sejumlah data dengan tipe yang sama (homogen)
                  dalam sebuah variabel. Setiap lokasi data array diberi nomor indeks yang berfungsi sebagai
                  alamat dari data tersebut. {"\n\n"}

                  var X: array[1..100] of Integer; {"\n"}
                  Cara mengisi data pada elemen larik dalam pemrogramana adalah sebagai berikut: {"\n"}
                  X[1]:= 4; {"\n"}
                  X[2]:= 3; {"\n"}
                  X[3]:= 2; {"\n"}
                  X[4]:= 1; {"\n\n"}
                </Text>
                <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                  Tipe Data Struct
                </Text>
                <Text style={{ color: 'grey' }}>
                  Seperti halnya Array, Record atau Struct adalah termasuk tipe data komposit.
                  Record dikenal dalam bahasa Pascal/Delphi sedangkan Struct dikenal dalam bahasa C++.
                  Berbeda dengan array, tipe data record mampu menampung banyak data dengan tipe data berbeda-beda
                  (heterogen). {"\n\n"}

                  Sebagai ilustrasi array mampu menampung banyak data namun dengan satu tipe data yang sama,
                  misalnya integer saja. Sedangkan dalam record, kita bisa menggunakan untuk menampung banyak data
                  dengan tipe data yang berbeda, satu bagian integer, satu bagian lagi character, dan bagian lainnya
                  Boolean. Biasanya record digunakan untuk menampung data suatu obyek. Misalnya, siswa memiliki nama,
                  alamat, usia, tempat lahir, dan tanggal lahir. Nama akan akan menggunakan tipe data string, alamat
                  bertipe data string, usia bertipe data single (numeric), tempat lahir bertipe data string dan tanggal
                  lahir bertipe data date. {"\n\n"}

                  Selain tipe data yang disebutkan masih banyak lagi tipe data composite yang dapat digunakan dalam pemrogramanan. {"\n"}
                </Text>
                <Grid>
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
                          <Text style={styles.optionText}>Composite Data Type Explanation</Text>
                        </View>
                      </View>
                    </Touchable>
                    {/* <WebView
                      style={{ flex: 1 }}
                      javaScriptEnabled={true}
                      source={{ uri: 'https://www.youtube.com/embed/x1toezqHTBI"' }}
                    /> */}
                  </Col>
                </Grid>
              </Col>
            </Grid>
            {/* <Grid>
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center', }} />
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Button style={[styles.nextButton, styles.midBut]} onPress={() => this.props.navigation.navigate('Clanguage')}>
                  <Ionicons name="md-arrow-forward" size={22} color="#fff" />
                </Button>
              </Col>
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center', }} />
            </Grid> */}
          </Content>
        </ScrollView>
      </Container>
    );
  }

  _handlePressYouTube = () => {
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=MM2JLO6HFmY'); //done ??
  };
}

const data3 = "Nama variabel tidak boleh mengandung karakter-karakter khusus,seperti : .+, -, *, /, <, >, &, (, ) dan lain-lain.";


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
    backgroundColor: '#738FF5',
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
    backgroundColor: '#738FF5'
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