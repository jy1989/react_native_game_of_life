
import React, {
    Component
} from 'react';
import {
    
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';




const styles = StyleSheet.create({
    welcome: {
        fontSize: 30,
       
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});


class Splashscreen extends Component {


    render() {

        return (
            <View style={styles.main}>
				<Text style={styles.welcome}>康威生命游戏</Text>
				<Text >powered by RN</Text>
			</View>
        );

    }
}



export default Splashscreen;
