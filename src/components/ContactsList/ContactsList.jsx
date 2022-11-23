import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

export const ContactsList = ({ contacts }) => {
  return (
    <ul className="contacts-list">
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
