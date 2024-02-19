import { useState } from 'react';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import css from '../App/App.module.css';
// import css from '../App/App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [
        ...prevContacts,
        {
          username: newContact,
          id: Date.now(),
        },
      ];
    });
  };
  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox />
        <ContactList items={contacts} />
      </div>
    </>
  );
};
