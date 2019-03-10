import React from 'react';
import { StyleSheet, Text, View, ListView, FlatList } from 'react-native';
import { Button, ListItem, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      label : 'test',
      items: []
    }
  }

  componentDidMount() {
  }


  _handleTextChange = () => {
    this.setState({label: 'test3'});
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.movies[0].title);
      this.setState({label: responseJson.movies[0].title})
      this.setState({ items: responseJson.movies});
      console.log(this.state.items);
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderItem({ item, index }) {
    return <View style={{
    flex: 1,
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 304,
    maxHeight:304,
    backgroundColor: '#CCC',
    }}/>
    }



  render() {
    return (
      <View style={styles.container}>
      <Button
  title="Solid Button" onPress={this._handleTextChange}
/>

    <View>
      <Card containerStyle={{padding: 5, width:200 }} title='movies' >
      {
        this.state.items.map((item, i) => (
          <ListItem
          key={i}
          title={item.title}
          subtitle={item.releaseYear}
          />
        ))
      }
      </Card>
    </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    flex: 1,
    width: '50%'
  },
  listContainer: {
    marginTop: 14,
    alignSelf: "stretch",
  }
});
