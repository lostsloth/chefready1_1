import React, { Component } from 'react';
import fbsdk, { LoginManager }  from 'react-native-fbsdk'
import { View,Text,StyleSheet,TouchableHighlight, } from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  ShareDialog,
} = FBSDK;

class Login extends Component {
    constructor(props) {
        super(props);
        const shareLinkContent = {
            contentType: 'link',
            contentUrl: 'http://avantifandb.com/restaurants/the-regional/',
        };

        this.state = {
            shareLinkContent: shareLinkContent,
        };
    }

    shareLinkWithShareDialog() {
        var tmp = this;
        ShareDialog.canShow(this.state.shareLinkContent).then(
            function (canShow) {
                if (canShow) {
                    return ShareDialog.show(tmp.state.shareLinkContent);
                }
            }
        ).then(
            function (result) {
                if (result.isCancelled) {
                    alert('Share cancelled');
                } else {
                    alert('Share success with postId: '
                        + result.postId);
                }
            },
            function (error) {
                alert('Share fail with error: ' + error);
            }
            );
    }

    render() {

    return (
        <View style={styles.container}> 
            <LoginButton publishPermissions={['publish_actions']}
                onLoginFinished={
                    (error, result) => {
                        (error) => {
                            alert('Login failed with error: ' + result.error);
                        };
                        if (result.isCancelled) {
                            alert('Login was cancelled');
                        } else {
                            alert('Login was success');
                        }
                    }
                }
                onLogoutFinished={() => alert('User logged out')}
                />
            <TouchableHighlight style={styles.share}
                onPress={this.shareLinkWithShareDialog.bind(this)}>
                <Text style={styles.shareText}>Share link with ShareDialog</Text>
            </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  shareText: {
    fontSize: 20,
    margin: 10,
  },
});

export default Login;
