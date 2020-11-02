import * as React from 'react';
import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import { PermissionsAndroid, Platform } from "react-native";

const Download = props => {
  const uri = props.navigation.getParam('screenshot');
  async function hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
          return true;
        }
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
      }
    async function savePicture() {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
          return;
        }
        CameraRoll.save(uri)
        alert('Downloaded')
      };
return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={savePicture}>
          <Text style={styles.buttonTextStyle}>
            Download
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>props.navigation.goBack()}>
          <Text style={styles.buttonTextStyle}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    buttonStyle: {
      fontSize: 16,
      color: 'white',
      backgroundColor: 'green',
      padding: 5,
      minWidth: 250,
    },
    buttonTextStyle: {
      padding: 5,
      color: 'black',
      textAlign: 'center',
    },
  });
export default Download;