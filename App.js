// Import necessary components from React and React Native.
import React from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, Button } from 'react-native';

// The main App component as a class.
export default class App extends React.Component {

  // Initialize the state.
  constructor(props) {
    super(props);
    this.state = {
      name: '',         // To store the current text entered into the TextInput.
      nameList: [],     // To store a list of names.
    };
  }

  // Add the current name to the list.
  addNameToList = () => {
    const updatedList = this.state.nameList.concat(this.state.name);
    this.setState({
      nameList: updatedList,
      name: '' // Reset the TextInput after adding.
    });
  }

  // Render the UI of the component.
  render() {
    return (
        <View style={styles.container}>

          {/* Text input to enter a name */}
          <TextInput
              style={styles.input}
              placeholder="Enter a name"
              value={this.state.name}
              onChangeText={(text) => this.setState({ name: text })}
          />

          {/* Button to add the name */}
          <Button title="Add Name" onPress={this.addNameToList} />

          {/* List to display the names */}
          <FlatList
              data={this.state.nameList}
              renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
              keyExtractor={(item, index) => index.toString()}
          />

        </View>
    );
  }
}

// Styling for the components.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
