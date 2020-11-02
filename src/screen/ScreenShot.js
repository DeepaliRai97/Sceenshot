
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {captureScreen} from 'react-native-view-shot';
const Screenshot = ({navigation}) => {
  const [imageURI, setImageURI] = useState(
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
  );
  //const [savedImagePath, setSavedImagePath] = useState('');

  const takeScreenShot = () => {
    // To capture Screenshot //
    captureScreen({
      format: 'jpg',
      quality: 0.8, 
    }).then(
      (uri) => {
        //setSavedImagePath(uri);
        setImageURI(uri);
        navigation.navigate('Download',{screenshot:uri})
       // CameraRoll.save(uri)
       // navigation.navigate('Download')
      },
      (error) => console.error('Oops, Something Went Wrong', error),
    );

  };
 return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={{uri: imageURI}}
          style={{
            width: 200,
            height: 300,
            resizeMode: 'contain',
            marginTop: 5
          }}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={takeScreenShot}>
          <Text style={styles.buttonTextStyle}>
            Take Screenshot
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screenshot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    padding: 10,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});
