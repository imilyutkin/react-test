import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormControl extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                { this.props.children }
                <input type="submit">Save</input>
            </form>
        );
    }
}

FormControl.props = {
    onSubmit: PropTypes.func
}

export default FormControl;