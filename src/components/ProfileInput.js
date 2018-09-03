import React, {Component} from 'react';
import {
    Container,
    Content,
    Item,
    Input,
    Label,
    Icon
} from 'native-base';
import {View, TouchableOpacity, Text, AlertIOS} from 'react-native';
import {Permissions, ImagePicker} from 'expo';
export default class ProfileInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userAvatar: '',
            userEmail: '',
            userName: ''
        }
    }

    askPermissionsAsync = async() => {
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
    };

    imagePicker = async() => {
        await this.askPermissionsAsync();
        const {cancelled, uri} = await ImagePicker.launchImageLibraryAsync({allowsEditing: true});
        if (!cancelled) {
            this.setState({userAvatar: uri});
        }
    }

    dispatchProfile = () => {
        const {userAvatar, userEmail, userName} = this.state;
        const {saveProfileData, navigate} = this.props.navigation.state.params;
        if (userAvatar && userEmail && userName) {
            saveProfileData(userName, userEmail, userAvatar);
            this.setState({userAvatar: '', userEmail: '', userName: ''})
            navigate('ProfileScreen')
        } else {
            AlertIOS.alert('fill all the fields');
        }

    }

    render() {
        const {
            state: {
                userEmail,
                userName
            },
            dispatchProfile
        } = this;
        return (
            <Container >
                <Content>
                    <View
                        style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        padding: 15,
                        margin: 15
                    }}>
                        <TouchableOpacity
                            onPress={this.imagePicker}
                            style={{
                            borderWidth: .5,
                            flexDirection: 'row',
                            borderStyle: 'solid',
                            height: 128,
                            width: 128,
                            borderRadius: 64,
                            borderColor: 'gray',
                            justifyContent: 'center'
                        }}>
                            <View
                                style={{
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Icon
                                    style={{
                                    left: 25,
                                    marginBottom: 10
                                }}
                                    name='person'/>
                                <Text>
                                    Add Avatar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View >

                    <Item
                        style={{
                        margin: 20
                    }}
                        floatingLabel
                        last>
                        <Label>Name</Label>
                        <Input value={userName} onChangeText={(e) => this.setState({userName: e})}/>
                    </Item>
                    <Item
                        style={{
                        margin: 20
                    }}
                        floatingLabel
                        last>
                        <Label>Email</Label>
                        <Input value={userEmail} onChangeText={(e) => this.setState({userEmail: e})}/>
                    </Item>

                    <View
                        style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        padding: 15,
                        margin: 15
                    }}>
                        <TouchableOpacity
                            style={{
                            top: 80,
                            height: 64,
                            width: 64,
                            borderRadius: 32,
                            borderWidth: .5,
                            borderStyle: 'solid',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: '#999999',
                            borderColor: '#999999'
                        }}
                            onPress={dispatchProfile}>
                            <View
                                style={{
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Text
                                    style={{
                                    color: "white"
                                }}>
                                    SAVE
                                </Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}