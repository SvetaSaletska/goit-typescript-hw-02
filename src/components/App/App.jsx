import { useState } from 'react';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import css from '../App/App.module.css';

export const App = () => {
  const [nameFilter, setNameFilter] = useState('');

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase()),
  );

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = userId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== userId);
    });
  };

  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox
          value={nameFilter}
          onChange={setNameFilter}
          text={'Find contacts by name'}
        />
        <ContactList items={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  );
};
