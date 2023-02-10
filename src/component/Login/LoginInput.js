import React from 'react';

class LoginInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.onUsernameChangeHandler = this.onUsernameChangeHandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onUsernameChangeHandler(event) {
        this.setState(() => {
            return {
                username: event.target.value
            }
        })
    }

    onPasswordChangeHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.login({
            username: this.state.username,
            password: this.state.password
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className='container-fluid'>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" placeholder='Username' className='form-control' value={this.state.username} onChange={this.onUsernameChangeHandler} />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type='password' placeholder='Password' className='form-control' value={this.state.password} onChange={this.onPasswordChangeHandler} />
                </div>
                <button className='btn btn-success rounded mx-auto d-block'>Masuk</button>
            </form>
        )
    }
}

export default LoginInput;
