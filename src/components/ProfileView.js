import React from "react";
import PropTypes from "prop-types";
import {Container, Content, Card} from "native-base";
import {View, TouchableOpacity, Image, Text} from "react-native";
import styles from "../styles";

export default function ProfileView({userName, userEmail, userAvatar, navigate, saveProfileData}){

        return (
            <Container>
                <Content padder>
                    <Card
                        transparent
                        style={styles.profileCard}>
                        <Image
                            style={styles.profileImage}
                            source={{
                            uri: userAvatar
                        }}/>
                        <Text
                            style={styles.profileTextPosition}>
                            {`Welcome, `}
                            <Text
                                style={styles.profileTextColor}>
                                {userName}</Text>

                        </Text>
                        <Text
                            style={styles.profileTextPosition}>
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
                            onPress={() => navigate('ProfileInput', {
                            saveProfileData: saveProfileData,
                            navigate: navigate
                        })}
                            style={styles.profileButton}>
                            <View
                                style={styles.profileButtonPosition}>
                                <Text
                                    style={styles.profileButtonColor}>
                                    CHANGE
                                </Text>
                            </View>

                        </TouchableOpacity>
                    </Card>
                </Content>
            </Container>
        );
}

ProfileView.propTypes = {
    userAvatar: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    saveProfileData: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  };