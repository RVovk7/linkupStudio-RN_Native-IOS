import React, {Component} from 'react';
import {
    Container,
    Content,
    Item,
    Input,
    Label,
    Icon
} from 'native-base';
import styles from "../styles";
import {View, TouchableOpacity, Text, AlertIOS} from 'react-native';
import {Permissions, ImagePicker} from 'expo';

export default class ProfileInput extends Component {

   state = {
            userAvatar: '',
            userEmail: '',
            userName: ''
        };

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
            this.setState({userAvatar: '', userEmail: '', userName: ''});
            navigate('Profile')
        } else {
            AlertIOS.alert('fill all the fields');
        }

    };

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
                        style={styles.profileInputView}>
                        <TouchableOpacity
                            onPress={this.imagePicker}
                            style={styles.profileImage}>
                            <View
                                style={styles.profileButtonPosition}>
                                <Icon
                                    style={styles.profileIcon}
                                    name='person'/>
                                <Text>
                                    Add Avatar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View >

                    <Item
                        style={styles.profileItem}
                        floatingLabel
                        last>
                        <Label>Name</Label>
                        <Input value={userName} onChangeText={(e) => this.setState({userName: e})}/>
                    </Item>
                    <Item
                       style={styles.profileItem}
                        floatingLabel
                        last>
                        <Label>Email</Label>
                        <Input value={userEmail} onChangeText={(e) => this.setState({userEmail: e})}/>
                    </Item>

                    <View
                        style={styles.profileInputView}>
                        <TouchableOpacity
                            style={styles.profileButton}
                            onPress={dispatchProfile}>
                            <View
                                style={styles.profileButtonPosition}>
                                <Text
                                   style={styles.profileButtonColor}>
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