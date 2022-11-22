import PropTypes from "prop-types";
// import { nanoid } from 'nanoid';

const ContactsList = ({ contacts }) => {
  return (
    <ContactsList className="contacts-list">
      {contacts.map(contact => {
        return <li key={contact.id}>{contact.name}</li>;
      })}
    </ContactsList>
  );
};

export default ContactsList;

ContactsList.propTypes = {
     contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
}