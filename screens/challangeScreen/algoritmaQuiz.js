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
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class ChallangeScreen extends React.Component {
  static navigationOptions = {
    title: 'Algoritma Challange',
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
            <Grid>
              <Col style={{ justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('algoritmaQuiz')}>
                <View style={[styles.listCss]}>
                  <Button style={[styles.circle, styles.midBut]} >
                    <Ionicons name="md-help-circle-outline" size={50} color="#fff" />
                  </Button>
                  <Text style={[styles.judulQuiz]}>Algoritma</Text>
                  <Text style={[styles.theQ]}>1 Question</Text>
                </View>
              </Col>
              <Col>
                <View style={[styles.listCss]}>
                  <Button style={[styles.circle, styles.midBut]} >
                    <Ionicons name="md-help-circle-outline" size={50} color="#fff" />
                  </Button>
                  <Text style={[styles.judulQuiz]}>Variable</Text>
                  <Text style={[styles.theQ]}>1 Question</Text>
                </View>
              </Col>
            </Grid>
            <Grid>
              <Col style={{ justifyContent: 'center' }}>
                <View style={[styles.listCss]}>
                  <Button style={[styles.circle, styles.midBut]} >
                    <Ionicons name="md-help-circle-outline" size={50} color="#fff" />
                  </Button>
                  <Text style={[styles.judulQuiz]}>Tipe Data</Text>
                  <Text style={[styles.theQ]}>1 Question</Text>
                </View>
              </Col>
              <Col>
                <View style={[styles.listCss]}>
                  <Button style={[styles.circle, styles.midBut]} >
                    <Ionicons name="md-help-circle-outline" size={50} color="#fff" />
                  </Button>
                  <Text style={[styles.judulQuiz]}>Operator</Text>
                  <Text style={[styles.theQ]}>1 Question</Text>
                </View>
              </Col>
            </Grid>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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
  judulQuiz: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  theQ: {
    fontSize: 10,
    color: 'grey',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#47a835',
  },
  midBut: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 5,
    marginTop: 5
  }
});