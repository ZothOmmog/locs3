import React from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import { setUser, changeCurrentMail, changeCurrentPass } from '../../redux/authReducer';

class AuthToApiContainer extends React.Component {
    setUser = () => {
        const mail = this.props.auth.page.currentMail;
        const pass = this.props.auth.page.currentPass;
        
        fetch(`http://localhost:4000/user/login/postLogin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ Login: { Mail: mail, Password: pass } }),
            credentials: 'include'
        })
            .then(responce => responce.json())
            .then(response => {
                if(response.Login.Flag) {
                    fetch('http://localhost:4000/user/login/me', { credentials: "include" })
                        .then(res => {
                            return res.json();
                        })
                        .then(res => {
                            if (res.user) {
                                this.props.setUser(res.user);
                            }
                        })
                        .catch(err => console.log(err));
                    
                    alert('Вы успешно авторизированы.');
                }
                else alert('Не верно введен логин или пароль.');
            });
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