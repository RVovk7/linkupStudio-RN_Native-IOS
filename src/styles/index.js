import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    profileCard: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 15,
        margin: 15
    },
    profileImage: {
        borderWidth: .5,
        flexDirection: 'row',
        height: 128,
        width: 128,
        borderRadius: 64,
        borderColor: 'gray',
        justifyContent: 'center'
    },
    profileImgTextPosition: {
        marginTop: 50,
        fontSize: 20
    },
    profileImgTextColor: {
        color: 'gray'
    },
    profileTextPosition: {
        margin: 20,
        fontSize: 20
    },
    profileButton: {
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
    },
    profileButtonPosition: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    profileButtonColor:{
        color: 'white'
    },
    profileInputView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 15,
        margin: 15
    },
    profileIcon:{
        left: 25,
        marginBottom: 10,
    },
    profileItem:{
        margin: 20
    }
});