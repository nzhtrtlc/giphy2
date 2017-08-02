import React, { PropTypes } from 'react';
import { Image, Text, View } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

class GifDetail extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {user,gif} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image resizeMode="contain" style={styles.headerGif} source={{uri : gif}} />
                    <Image style={styles.headerImage}
                           source={{uri: user.avatar_url || user.banner_url || ""}}/>
                </View>
                <View style={styles.content}>
                    <Text>{user.display_name}</Text>
                    <Text>{user.twitter}</Text>
                </View>
            </View>
        );
    }

}

GifDetail.propTypes = {
    foo: PropTypes.node
};

const styles = EStyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerGif : {
        width : '100%',
        height : '100%'
    },
    headerImage: {
        width: 60,
        height: 60,
    },
    content: {
        flex: 4,
    }
});

export default GifDetail;
