import React, { Component } from 'react';
import style from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value, });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: ''})
    };

    render() {
        return (
            <form className={style.form}
                onSubmit={this.handleSubmit}>
                <label className={style.label}>
                    Name <input
                      className={style.input}
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                      required
                    />
                </label>

                <label className={style.label}>
                    Number <input
                      className={style.input}
                      type="tel"
                      name="number"
                      value={this.state.number}
                      onChange={this.handleChange}
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                      required
                      />
                </label>

                <button className={style.button} type="submit">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;