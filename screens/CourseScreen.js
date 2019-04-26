import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Button, Content, Left, Right, Thumbnail, Icon } from "native-base";
import { WebBrowser } from 'expo';
import { Grid, Col } from "react-native-easy-grid";
import Touchable from 'react-native-platform-touchable';

export default class CourseScreen extends React.Component {
  static navigationOptions = {
    title: 'My Course',
    headerStyle: {
      backgroundColor: '#eb3b5a',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <Container>
        <ScrollView style={{ flex: 1 }}>
          <Content style={{ backgroundColor: "#fcfcfc" }}>
            <Touchable style={[styles.course, styles.shadows]} onPress={() => this.props.navigation.navigate('Algoritma')}>
              <Grid>
                <Col style={{ width: 90, height: 90, marginBottom: 5 }}>
                  <Image
                    source={require('../assets/icon/algorithm.png')}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={styles.imageIcon}
                  />
                </Col>
                <Col style={{ height: 80, marginBottom: 5, paddingLeft: 20, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>
                    Algoritma Pemrograman
                </Text>
                </Col>
              </Grid>
            </Touchable>
            <Touchable style={[styles.course, styles.shadows]} onPress={() => this.props.navigation.navigate('Variable')}>
              <Grid>
                <Col style={{ width: 90, height: 90, marginBottom: 5 }}>
                  <Image
                    source={require('../assets/icon/variable.png')}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={styles.imageIcon}
                  />
                </Col>
                <Col style={{ height: 80, marginBottom: 5, paddingLeft: 20, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>
                    Variable
                </Text>
                </Col>
              </Grid>
            </Touchable>
            <Touchable style={[styles.course, styles.shadows]} onPress={() => this.props.navigation.navigate('TipeData')}>
              <Grid>
                <Col style={{ width: 90, height: 90, marginBottom: 5 }}>
                  <Image
                    source={require('../assets/icon/data-type.png')}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={styles.imageIcon}
                  />
                </Col>
                <Col style={{ height: 80, marginBottom: 5, paddingLeft: 20, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>
                    Tipe Data
                </Text>
                </Col>
              </Grid>
            </Touchable>
            <Touchable style={[styles.course, styles.shadows]} onPress={() => this.props.navigation.navigate('Operator')}>
              <Grid>
                <Col style={{ width: 90, height: 90, marginBottom: 5 }}>
                  <Image
                    source={require('../assets/icon/operator.png')}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={styles.imageIcon}
                  />
                </Col>
                <Col style={{ height: 80, marginBottom: 5, paddingLeft: 20, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>
                    Operator
                </Text>
                </Col>
              </Grid>
            </Touchable>
            {/* <Touchable style={[styles.course, styles.shadows]} onPress={() => this.props.navigation.navigate('Percabangan')}>
              <Grid>
                <Col style={{ width: 90, height: 90, marginBottom: 5 }}>
                  <Image
                    source={require('../assets/icon/percabangan.png')}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={styles.imageIcon}
                  />
                </Col>
                <Col style={{ height: 80, marginBottom: 5, paddingLeft: 20, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>
                    Percabangan
                  </Text>
                </Col>
              </Grid>
            </Touchable>
            <Touchable style={[styles.course, styles.shadows]} onPress={() => this.props.navigation.navigate('Perulangan')}>
              <Grid>
                <Col style={{ width: 90, height: 90, marginBottom: 5 }}>
                  <Image
                    source={require('../assets/icon/perulangan.png')}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={styles.imageIcon}
                  />
                </Col>
                <Col style={{ height: 80, marginBottom: 5, paddingLeft: 20, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>
                    Perulangan
                  </Text>
                </Col>
              </Grid>
            </Touchable> */}
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  course: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: '#fff',
  },
  shadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.48,
    shadowRadius: 5.00,
    elevation: 3,
    borderBottomColor: '#f4f4f4',
  },
  imageIcon: {
    width: 80,
    height: 80,
    marginTop: 5,
    marginBottom: 5,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.48,
    shadowRadius: 5.00
  }
});