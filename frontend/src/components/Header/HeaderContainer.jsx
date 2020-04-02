import React from 'react';
import s from "./Header.module.css";
import "../CommonStyles/Link/Link.css";
import { NavLink } from 'react-router-dom';

export function Header() {
	return (
		<div className={s.Header}>
			<div className={s.buttons}>
				<NavLink to="/Registration" className={s.button}>
					Вход
				</NavLink>
				<div className={s.partition}></div>
				<NavLink to="/Registration" className={s.button}>
					Регистрация
				</NavLink>
			</div>

		</div>
	);
}