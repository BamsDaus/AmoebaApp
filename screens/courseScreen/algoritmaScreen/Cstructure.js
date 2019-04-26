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
import { Container, Button, Content, Icon, List, ListItem, SwipeRow, Accordion } from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

export default class CourseScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#eb3b5a',
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
                  Struktur Algoritma
                </Text>
                <View
                  style={{
                    borderBottomColor: '#eb3b5a',
                    borderBottomWidth: 1,
                    marginBottom: 2,
                    marginTop: 2,
                  }}
                />
                <Image
                  source={require('../../../assets/images/struktur-algoritma.png')}
                  resizeMode="stretch"
                  fadeDuration={0}
                  style={{ width: 320 }}
                />
                <Text style={{ color: 'grey' }}>
                  Untuk menyelesaikan masalah, algoritma membutuhkan spesifikasi input (masukan) sesuai yang diperlukan,
                  memprosesnya melalui serangkaian langkah-langkah dan menghasilkan output sebagai solusi dari permasalahan.
                </Text>
                <Grid>
                  <Col style={{ backgroundColor: "#eb3b5a", width: 7, marginTop: 20, marginBottom: 20, marginLeft: 5, borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} />
                  <Col style={[styles.rightCol]}>
                    <Text>
                      Tiga Struktur Algoritma
                    </Text>
                    <Content padder style={{ backgroundColor: "white" }}>
                      <Accordion
                        dataArray={dataArray}
                        animation={true}
                        expanded={true}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                      />
                    </Content>
                    <Text>

                    </Text>
                    {/*<ListView
                      dataSource={this.state.dataSource}
                      renderRow={(rowData) => <Text style={[styles.listCss]}>{rowData}</Text>}
                      style={{ backgroundColor: '#fff' }}
                    />*/}
                  </Col>
                  <Col style={{ backgroundColor: "#eb3b5a", width: 7, marginTop: 20, marginBottom: 20, marginRight: 5, borderTopRightRadius: 3, borderBottomRightRadius: 3 }} />
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
                          <Text style={styles.optionText}>Algorithm Structure</Text>
                        </View>
                      </View>
                    </Touchable>
                  </Col>
                </Grid>
              </Col>
            </Grid>
            {/* <Grid>
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center', }} />
              <Col style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Button style={[styles.nextButton, styles.midBut]} onPress={() => this.props.navigation.navigate('Cstructure')}>
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
    WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v=N9CYNGIMPJ8');
  };

  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ed788d",
        color: '#fff',
      }}>
        <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }

  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
        {/* <Touchable onPress>{item.more}</Touchable> */}
      </Text>
    );
  }
}


const dataArray = [
  { title: "Sekuensial", content: "Sebuah instruksi akan dikerjakan setelah instruksi sebelumnya telah dikerjakan." },
  { title: "Pemilihan", content: "Pemilihan langkah yang didasarkan pada suatu kondisi." },
  { title: "Perulangan", content: "Suatu perintah atau tindakkan yang dilakukan beberapa kali dengan kondisi yang ditentukan" }
];


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
    backgroundColor: '#eb3b5a',
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

    justifyContent: 'center',

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
    backgroundColor: '#eb3b5a'
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