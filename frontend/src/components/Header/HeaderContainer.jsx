import React from 'react';
import "../CommonStyles/Link/Link.css";
import { Header } from './Header';
import { connect } from 'react-redux';
import { setUser } from '../../redux/authReducer';

class HeaderToApiContainer extends React.Component {
	componentDidMount() {
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
	}

	render() {
		return <Header isAuth={this.props.isAuth} nick={this.props.nick} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	nick: state.auth.user.nick
});

export const HeaderContainer = connect(mapStateToProps, { setUser })(HeaderToApiContainer);