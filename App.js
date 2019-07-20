import React, {Component} from 'react';
import {TouchableOpacity, PermissionsAndroid, Button, View} from 'react-native';
import Torch from 'react-native-torch';

export default class App extends Component{
    prenderLinterna = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Cool Photo App Camera Permission',
              message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Torch.switchState(true); // Turn ON
                console.log('You can use the camera');
          }
    }
    
    apagarLinterna = () => {
        Torch.switchState(false);
    }
    render() {
        return (
            <View style={{justifyContent: 'center',height: '100%'}}>
                <TouchableOpacity style={{marginBottom: 50}}>
                    <Button title={'PRENDER LINTERNA VIEJO MARIKITA'}
                    onPress={()=>this.prenderLinterna()}
                    ></Button>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Button color='red' title={'APAGAR LINTERNA VIEJO MARIKIN'}
                    onPress={()=>this.apagarLinterna()}></Button>

                </TouchableOpacity>
            </View>
        );
    }
}

