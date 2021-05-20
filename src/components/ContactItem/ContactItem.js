import React from 'react';
import style from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onClick }) => (
    <li className={style.item}>{name}: {number}
        <button type="button"
            className={style.btn}
            onClick={() => { onClick(id) }}>
            Delete</button>
    </li>
);

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ContactItem;