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
import { Container, Button, Content, Left, Right, Thumbnail } from "native-base";
import { Grid, Col } from "react-native-easy-grid";
import Touchable from 'react-native-platform-touchable';

export default class ChallangeScreen extends React.Component {
  static navigationOptions = {
    title: 'Tipe Data',
    headerStyle: {
      backgroundColor: '#738FF5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: "#f4f4f4" }}>
          <Grid style={[styles.gridStyle]}>
            <Col style={{ marginBottom: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('basConcept')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/dataTypeIcon/concept.png')
                      : require('../../assets/icon/dataTypeIcon/concept.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Basic Concept</Text>
            </Col>
          </Grid>
          <Grid style={[styles.gridStyle]}>
            <Col style={{ marginBottom: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('primitive')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/dataTypeIcon/primitive.png')
                      : require('../../assets/icon/dataTypeIcon/primitive2.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Primitive Data Type</Text>
            </Col>
          </Grid>
          <Grid style={[styles.gridStyle]}>
            <Col style={{ marginBottom: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('composite')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/dataTypeIcon/composite2.png')
                      : require('../../assets/icon/dataTypeIcon/composite.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Composite Data Type</Text>
            </Col>
          </Grid>
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  iconText: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
    marginBottom: 5
  },
  imageIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginBottom: 3,
  },
  gridStyle: {
    marginTop: 25,
    marginBottom: 25
  },
});
