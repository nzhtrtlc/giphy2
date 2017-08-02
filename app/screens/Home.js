import React, { PropTypes } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    ScrollView,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { connect } from 'react-redux';
import { getTrendingGifs,gifsRefresh} from '../actions/gifs';
import EStyleSheet from 'react-native-extended-stylesheet';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing : false
        }
    }

    getGifs() {
        this.props.dispatch(getTrendingGifs());
    };

    gotoGifDetail(obj) {
        this.props.navigation.navigate('GifDetail', obj);
    }

    componentWillMount() {
        this.getGifs();
    }

    _onRefresh() {
        this.props.dispatch(gifsRefresh());
        this.getGifs();
    }

    render() {
        const {gifsLoaded, gifs,gifsRefresh} = this.props;
        return (
            <ScrollView refreshControl={
                <RefreshControl
                refreshing={gifsRefresh}
                onRefresh={this._onRefresh.bind(this)}
                />
            }>
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <TextInput style={{
                        height: 40,
                        width: Dimensions.get('window').width,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding : 10
                    }}/>
                </View>
                <View style={{flex: 3, flexDirection: 'row', flexWrap: 'wrap'}}>
                    {gifsLoaded && gifs.data.map(d =>
                        <TouchableOpacity key={d.id} onPress={() => this.gotoGifDetail({user : d.user, gif : d.images.preview_gif.url})}>
                            <Image
                                style={{
                                    width: Dimensions.get('window').width / 2,
                                    height: parseInt(d.images.fixed_width.height)
                                }}
                                source={{uri: d.images.fixed_width.url}}/>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
    </ScrollView>
    )
        ;
    }

}
//
// {gifsLoaded && gifs.data.map(d =>
//     <Image key={d.id} style={{width: parseInt(d.fixed_width.width), height: parseInt(d.fixed_width.height)}}
//            source={{uri: d.fixed_width.url}}/>
// )}

Home.propTypes = {
    foo: PropTypes.node
};

const styles = EStyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = state => {
    return {
        gifsLoaded: state.gifReducer.gifsLoaded,
        gifsRefresh : state.gifReducer.gifsRefresh,
        gifs: state.gifReducer.gifs
    }
};

export default connect(mapStateToProps)(Home);
