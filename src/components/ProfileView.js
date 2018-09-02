import React, {Component} from "react";
import PropTypes from "prop-types";
import {Container, Content, Card} from "native-base";
import {View, TouchableOpacity, Image, Text} from "react-native";
export default class ProfileView extends Component {
  static propTypes = {
    userAvatar: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    saveProfileData: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,

  }
    render() {
        const {userName, userEmail, userAvatar, navigate, saveProfileData} = this.props;
        return (
            <Container>
                <Content padder>
                    <Card
                        transparent
                        style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        padding: 15,
                        margin: 15
                    }}>
                        <Image
                            style={{
                            borderWidth: .5,
                            flexDirection: 'row',
                            height: 128,
                            width: 128,
                            borderRadius: 64,
                            borderColor: 'gray',
                            justifyContent: 'center'
                        }}
                            source={{
                            uri: userAvatar
                        }}/>
                        <Text
                            style={{
                            marginTop: 50,
                            fontSize: 20
                        }}>
                            {`Welcome, `}
                            <Text
                                style={{
                                color: 'gray'
                            }}>
                                {userName}</Text>

                        </Text>
                        <Text
                            style={{
                            margin: 20,
                            fontSize: 20
                        }}>
                            {userEmail
                                ? `Email: `
                                : ``}
                            <Text
                                style={{
                                color: 'gray'
                            }}>
                                {userEmail}
                            </Text>
                        </Text>

                        <TouchableOpacity
                            onPress={() => navigate('ProfileInputScreen', {
                            saveProfileData: saveProfileData,
                            navigate: navigate
                        })}
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
                        }}>
                            <View
                                style={{
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Text
                                    style={{
                                    color: "white"
                                }}>
                                    CHANGE
                                </Text>
                            </View>

                        </TouchableOpacity>
                    </Card>
                </Content>
            </Container>
        );
    }
}