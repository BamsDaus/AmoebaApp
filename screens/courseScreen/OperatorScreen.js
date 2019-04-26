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
    title: 'Operator',
    headerStyle: {
      backgroundColor: '#FFA057',
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
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('basicConceptOperator')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/operatorIcon/concept2.png')
                      : require('../../assets/icon/algoritmaIcon/concept.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Basic Concept</Text>
            </Col>
          </Grid>
          <Grid style={[styles.gridStyle]}>
            <Col style={{ marginBottom: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('aritmatikaScreen')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/operatorIcon/aritmatika.png')
                      : require('../../assets/icon/operatorIcon/aritmatika2.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Operator Aritmatika</Text>
            </Col>
            <Col style={{ marginBottom: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('logikaScreen')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/operatorIcon/logika2.png')
                      : require('../../assets/icon/operatorIcon/logika.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Operator Logika</Text>
            </Col>
          </Grid>
          <Grid style={[styles.gridStyle]}>
            <Col style={{ marginBottom: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('incDecScreen')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/operatorIcon/increment2.png')
                      : require('../../assets/icon/operatorIcon/increment.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Operator Increment - Decrement</Text>
            </Col>
            <Col style={{ marginBottom: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('relasionalScreen')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/operatorIcon/relasional.png')
                      : require('../../assets/icon/operatorIcon/relasional2.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Operator Relasional</Text>
            </Col>
          </Grid>
          <Grid style={[styles.gridStyle]}>
            <Col style={{ marginBottom: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('bitwiseScreen')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/operatorIcon/bitwise.png')
                      : require('../../assets/icon/operatorIcon/bitwise2.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Operator Bitwise</Text>
            </Col>
            <Col style={{ marginBottom: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Touchable style={[styles.imageIcon]} onPress={() => this.props.navigation.push('assignmentScreen')}>
                <Image
                  source={
                    __DEV__
                      ? require('../../assets/icon/operatorIcon/assigment2.png')
                      : require('../../assets/icon/operatorIcon/assigment.png')
                  }
                  style={styles.imageIcon}
                />
              </Touchable>
              <Text style={styles.iconText}>Operator Assignment</Text>
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
