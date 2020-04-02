import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import {setUser, changeCurrentMail, changeCurrentPass} from '../../redux/authReducer';

class AuthToApiContainer extends React.Component {
    componentDidMount() {
    }

    setUser = () => {
        const mail = this.props.auth.page.currentMail;
        const pass = this.props.auth.page.currentPass;
        const login = { Mail: mail, Password: pass };
        fetch(`http://localhost:4000/users/login/postLogin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ Login: login })
        })
            .then(responce => responce.json())
            .then(response => alert('Результат авторизации: ' + response.Login.Flag));
    }

    changeCurrentMail = (e) => {
        const newMail = e.currentTarget.value;
        this.props.changeCurrentMail(newMail);
    }

    changeCurrentPass = (e) => {
        const newPass = e.currentTarget.value;
        this.props.changeCurrentPass(newPass);
    }

    render() {
        return (
            <Auth
                currentMail={this.props.auth.page.currentMail}
                currentPass={this.props.auth.page.currentPass}
                setUser={this.setUser}
                changeCurrentMail={this.changeCurrentMail}
                changeCurrentPass={this.changeCurrentPass}
            />
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth
});

export const AuthContainer = connect(mapStateToProps, { setUser, changeCurrentMail, changeCurrentPass })(AuthToApiContainer);