import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';
import { Provider } from 'react-redux';
import store from './config/store';

EStyleSheet.build({
   $primaryColor : '#000'
});


export default () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)
