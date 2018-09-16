import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'
import Comments from '../containers/Comments';
import Profile from '../containers/Profile';
import CommentView from '../components/CommentView';
import ProfileInput from '../components/ProfileInput';

const CommentsStack = createStackNavigator({ Comments, CommentView});
const ProfileStack = createStackNavigator({ Profile, ProfileInput});

const RootNavigator = createBottomTabNavigator({
    'Comments': {
        screen: CommentsStack
    },
    'Profile': {
        screen: ProfileStack
    }
}, {
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Comments') iconName = `ios-home`;
            if (routeName === 'Profile') iconName = `ios-person`;
            
            return <Ionicons name={iconName} size={25} color={tintColor}/>;
        }
    }),
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray'
    }
});

export default function Navigate() {
    return (
            <RootNavigator/>
    )
};