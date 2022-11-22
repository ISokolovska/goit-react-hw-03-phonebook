// import PropTypes from "prop-types";
// import { nanoid } from 'nanoid';

export const ContactsList = ({ contacts }) => {
  return (
    <ContactsList className="contacts-list">
      {contacts.map(contact => {
        return (
          <li key={contact.id}><span>{contact.name}</span></li>);
      })}
    </ContactsList>
  );
};

// ContactsList.propTypes = {
//      contacts: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         id: PropTypes.number.isRequired,
//     })).isRequired,
// }