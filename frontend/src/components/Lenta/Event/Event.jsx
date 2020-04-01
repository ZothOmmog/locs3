import React from 'react';
import s from './Event.module.css';

const Event = (props) => {
	return (
		<div className={s.Event}>
			<div className={s.name}>{props.name}</div>
			<div className={s.type}>{props.type}</div>
			<div className={s.info}>{props.info}</div>
		</div>
	);
}

export default Event;