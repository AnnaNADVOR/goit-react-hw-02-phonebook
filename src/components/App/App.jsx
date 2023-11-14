import { Component } from "react";
import { nanoid } from "nanoid";
import { Report } from 'notiflix/build/notiflix-report-aio';

import ContactForm from "../PhoneBook/ContactForm/ContactForm";
import ContactList from "../PhoneBook/ContactList/ContactList";
import Filter from "../PhoneBook/Filter/Filter";
import Notification from "../PhoneBook/Notification/Notification";

import {
  Container,
  MainTitle,
  SecondaryTitle,
} from "./App.styled";


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
  
    if (this.state.contacts.find(prevContact => prevContact.name.toLowerCase() === contact.name.toLowerCase())) {
      Report.info(
        "Enter a unique name!",
        `This contact's name ${contact.name} already exists.`,
        "OK"
      )
      return;
    }
    
    return this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }))
  }

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
     return contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const {contacts, filter } = this.state; 

    return (
      <Container>
        <MainTitle>Phone Book</MainTitle>
        <ContactForm submit={this.addContact} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList contacts={this.getVisibleContacts()} onDeleteContact={this.deleteContact}/>
          </>
          ) :
          (<Notification message="There is no contacts"/>)
        }     
      </Container>
    );
}
}

export default App;
