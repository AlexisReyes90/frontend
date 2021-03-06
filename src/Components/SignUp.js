import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../Action';

class SignUp extends Component {

    state = {
        username: '',
        password: ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        const { username, password } = this.state;

        e.preventDefault()
        this.props.createUser({ username, password });
        this.setState({ username: '', password: '' })
        this.props.history.push('/');
    }

    render() {
        return(
        <div>
           <div> Register </div>
           <form>
            <input name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
            <input name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
            <button onClick={this.handleSubmit} className="save-button">SignUp!</button>
           </form>
        </div> 
        );
    }
}

export default connect(null, { createUser })(SignUp);