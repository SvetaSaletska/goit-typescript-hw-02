import { Contact } from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.contact_list}>
      {items.map(item => (
        <li key={item.id}>
          <div className={css.item}>
            <Contact items={item} />
            <button className={css.button} onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
