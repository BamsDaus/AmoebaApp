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
      backgroundColor: '#5DCF87',
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
                  Variable
                </Text>
                <View
                  style={{
                    borderBottomColor: '#5DCF87',
                    borderBottomWidth: 1,
                    marginBottom: 2,
                    marginTop: 2,
                  }}
                />
                <Text style={{ color: 'grey' }}>
                  Variabel adalah tempat dimana kita dapat mengisi atau mengosongkan nilainya dan
                  memanggil kembali apabila dibutuhkan. Setiap variabel akan mempunyai nama (identifier)
                  dan nilai. {"\n"}
                </Text>
                <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                  Contoh : {"\n"}
                </Text>
                <Text style={{ color: 'grey' }}>
                  - username = "joni" {"\n"}
                  - hargaTotal = 2500 {"\n"}
                </Text>
                <Text style={{ color: 'grey' }}>
                  Pada sebagian besar bahasa pemrograman, variabel harus dideklarasikan lebih dulu untuk
                  mempermudah compiler bekerja. Apabila variabel tidak dideklarasikan maka setiap kali
                  compiler bertemu dengan variabel baru Pemberian nama variabel harus mengikuti aturan
                  yang ditetapkan oleh bahasa pemrograman yang kita gunakan.
                </Text>
                <Grid>
                  <Col style={{ backgroundColor: "#5DCF87", width: 7, marginTop: 20, marginBottom: 20, marginLeft: 5, borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} />
                  <Col style={[styles.rightCol]}>
                    <Grid>
                      <Col>
                        <Text>
                          Aturan Penamaan Variable
                        </Text>
                      </Col>
                    </Grid>
                    <Text style={[styles.listCss]}>
                      Nama variabel harus diawali dengan huruf.
                    </Text>
                    <Text style={[styles.listCss]}>
                      Tidak boleh menggunakan spasi pada satu nama variabel. Spasi bisa diganti dengan karakter underscore (_).
                    </Text>
                    <Text style={[styles.listCss]}>
                      {data3}
                    </Text>
                    <Text style={[styles.listCss]}>
                      Nama variabel tidak boleh menggunakan kata-kata kunci di bahasa pemrograman
                    </Text>

                    {/*<ListView
                      dataSource={this.state.dataSource}
                      renderRow={(rowData) => <Text style={[styles.listCss]}>{rowData}</Text>}
                      style={{ backgroundColor: '#fff' }}
                    />*/}
                  </Col>
                  <Col style={{ backgroundColor: "#5DCF87", width: 7, marginTop: 20, marginBottom: 20, marginRight: 5, borderTopRightRadius: 3, borderBottomRightRadius: 3 }} />
                </Grid>
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
                          <Text style={styles.optionText}>Variable Explanation</Text>
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
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=EQ1jhQMkByA'); //done
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
    backgroundColor: '#5DCF87'
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