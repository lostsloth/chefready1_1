import React, { Component } from 'react';
import fbsdk, { LoginManager } from 'react-native-fbsdk'
import { View, Text, StyleSheet, TouchableHighlight, } from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
    ShareDialog,
    AccessToken,
    Email
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

    goToHomePage(accessToken) {
        console.log('goToHomePage()');
        this.props.navigator.replace({ id: 'Homepage' });
    }

    componentWillMount() {
        console.log('componentWillMount: ' + AccessToken)
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                if (data)
                    this.goToHomePage();
            }
        )
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
                <LoginButton
                    publishPermissions={['publish_actions']}
                    readPermissions={['public_profile']}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log('login has error: ', result.error)
                            } else if (result.isCancelled) {
                                console.log('login is cancelled.')
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        this.goToHomePage();
                                    }
                                )

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
