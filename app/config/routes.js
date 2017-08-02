import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import GifDetail from '../screens/GifDetail';

export default StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Trending Gifs',
            headerStyle: {
                backgroundColor: '#3F51B5',
            },
            headerTitleStyle: {
                color: '#94a1e6'
            },
        }
    },
    GifDetail : {
        screen : GifDetail,
        navigationOptions: {
            title : '',
            headerStyle: {
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0
            },
            headerTitleStyle: {
                color: '#94a1e6'
            },
        }
    }
}, {
    cardStyle : { paddingTop : StatusBar.currentHeight}
});
