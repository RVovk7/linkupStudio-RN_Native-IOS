import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/modules';
import AppNavigator from './src/navigators';

export default function App() {
    return (
        <Provider store={Store}>
                <AppNavigator />
        </Provider>
    );
}