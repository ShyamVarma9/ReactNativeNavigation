import React, {Component} from'react';
import  {Text, View, Button} from 'react-native';

class Home extends Component {
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home screen</Text>

                <Button
                        title="Go to Blog"
                        onPress={() => this.props.navigation.navigate ('Blog')}
                />
            </View>

        );

    }
}

export default Home;
