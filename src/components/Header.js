import React, { Component } from 'react';

class Header extends Component {


    handleKeyUp = (e) => {
        // const text = e.target.value;
        if (e.keyCode === 13) {
            this.props.onSubmit(this.inputElement.value);
            this.inputElement.value = '';
        }
    }

    render() {
        return (
            <header className="header">
                <h1>Todo</h1>
                <input type="text" ref={node => this.inputElement = node} className="new-todo" placeholder="" onKeyUp={this.handleKeyUp}/>
            </header>
        );
    }
}

export default Header;