import React from 'react';
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contactList, onClick }) => (
    <ul>
        {contactList.map(item => (
                <ContactItem 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    number={item.number}
                    onClick={onClick}
                />
        ))}
    </ul>
);

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;