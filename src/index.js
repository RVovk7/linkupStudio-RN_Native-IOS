import React from 'react';
import {Provider} from 'react-redux';
import Store from './modules';
import AppNavigator from './navigators';
const a;
export default function App() {
    return (
        <Provider store={Store}>
                <AppNavigator />
        </Provider>
    );
}