import React, {Component} from 'react';
import './App.css';
import Contacts from './components/contact';

class App extends Component {

  state = {
    contacts: [],
    
  }

  componentDidMount() {
    fetch('http://localhost:3000/alumnos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render() {
    var dataSaved = []
    var contacts = this.state.contacts
    for(var i = 0;i<contacts.length;i++){
      dataSaved.push(contacts[i])
    }
    return (
      <Contacts contacts={this.state.contacts} />
    )
  }

}

export default App;
