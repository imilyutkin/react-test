import React from 'react';

class TextControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: !!this.props.value? this.props.value : ""};
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({ text: e.target.value});
    }

    render() {
        return(
            <input type="text" value={ this.state.text } onChange={ this.onChange } />
        )
    }
}

export default TextControl;