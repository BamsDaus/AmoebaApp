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
                  Tipe Data Primitive
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
                  Tipe data primitive adalah tipe data dasar yang tersedia secara langsung pada suatu bahasa pemrograman. {"\n"}
                </Text>
                <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                  Macam-macam tipe data primitive : {"\n"}
                </Text>
                <Text style={{ color: 'grey' }}>
                  - Numeric {"\n"}
                  - Character {"\n"}
                  - Boolean {"\n\n"}
                </Text>
                <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                  Tipe Data Numeric
                </Text>
                <Text style={{ color: 'grey' }}>
                  Tipe data numeric digunakan pada variabel atau konstanta untuk menyimpan nilai dalam bentuk
                  bilangan atau angka. Semua bahasa pemrograman menyediakan tipe data numeric, hanya berbeda
                  dalam jenis numeric yang diakomodasi. {"\n\n"}

                  Jenis yang termasuk dalam tipe data numeric antara lain : {"\n"}
                  1. Integer (Bilangan Bulat) {"\n"}
                  2. Float (Bilangan Pecahan) {"\n"}
                  3. Tipe data Single adalah tipe data untuk bilangan pecahan dengan presisi yang terbatas {"\n"}
                  4. Tipe data Double adalah tipe data untuk bilangan pecahan dengan presisi yang lebih akurat. {"\n\n"}

                  Penentuan tipe data numeric untuk suatu variabel/konstanta harus sangat berhati-hati.
                  Manual dan petunjuk pada masing-masing bahasa pemrograman pada bagian tipe data harus
                  diperhatikan dengan seksama.
                </Text>
                <Image
                  source={require('../../../assets/images/tipe-data-numerik.png')}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 320 }}
                />

                <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                  Tipe Data Character
                </Text>
                <Text style={{ color: 'grey' }}>
                  Bersama dengan tipe data numeric, character merupakan tipe data yang paling banyak digunakan.
                  Tipe data character kadang disebut sebagai char atau string.
                  Tipe data string hanya dapat digunakan menyimpan teks atau apapun sepanjang berada dalam
                  tanda petik dua (“…”) atau petik tunggal (‘…’) {"\n"}
                </Text>
                <Image
                  source={require('../../../assets/images/tipe-data-char.png')}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 320 }}
                />

                <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                  Tipe Data Boolean
                </Text>
                <Text style={{ color: 'grey' }}>
                  Tipe data Boolean digunakan untuk menyimpan nilai True/False (Benar/Salah).
                  Pada sebagian besar bahasa pemrograman nilai selain 0 menunjukkan True dan 0 melambangkan False.
                  Tipe data ini banyak digunakan untuk pengambilan keputusan pada struktur percabangan
                  dengan IF … THEN atau IF … THEN … ELSE {"\n\n"}
                </Text>
                <View style={[styles.codeHighlightContainer, styles.homeScreenFilename, styles.jtal]}>
                  <MonoText style={styles.codeHighlightText}>
                    If Nilai >= 60 Then {"\n"}
                    {"\t"}printf("Lulus Ujian"); {"\n"}
                    Else {"\n"}
                    {"\t"}printf(‘Tidak lulus’); {"\n"}
                    End if
                  </MonoText>
                </View>
                <Grid>
                  <Col style={{ backgroundColor: "#738FF5", width: 7, marginTop: 20, marginBottom: 20, marginLeft: 5, borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} />
                  <Col style={[styles.rightCol, styles.mid]}>
                    <Text style={{ fontWeight: 'bold' }}>Contoh Program</Text>
                    <Image
                      source={require('../../../assets/images/programC.png')}
                      resizeMode="contain"
                      fadeDuration={0}
                      style={{ width: 285, marginTop: 0, marginBottom: 0 }} />

                    {/*<ListView
                      dataSource={this.state.dataSource}
                      renderRow={(rowData) => <Text style={[styles.listCss]}>{rowData}</Text>}
                      style={{ backgroundColor: '#fff' }}
                    />*/}
                  </Col>
                  <Col style={{ backgroundColor: "#738FF5", width: 7, marginTop: 20, marginBottom: 20, marginRight: 5, borderTopRightRadius: 3, borderBottomRightRadius: 3 }} />
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
                          <Text style={styles.optionText}>Primitive Data Type Explanation</Text>
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
            <Grid>
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center', }} />
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Button style={[styles.nextButton, styles.midBut]} onPress={() => this.props.navigation.navigate('composite')}>
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
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=d81DcPIyiOU'); //done
  };
}

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
  },
  mid: {
    alignContent: 'center',
    justifyContent: 'center'
  }
});