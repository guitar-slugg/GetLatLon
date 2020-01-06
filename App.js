import React, { Component } from 'react';
import { Clipboard, Text, Button, StyleSheet, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Geolocation.getCurrentPosition(
      (position) => {
        //console.log(position);
        var locStr = position.coords.latitude + "," + position.coords.longitude; 
        Clipboard.setString(locStr);
        alert(locStr + "\n copied to clipboard");
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Get Lat/Lon"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6ED4C8',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
