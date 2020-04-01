import React from 'react';
import Event from './Event/Event.jsx';
import s from "./Lenta.module.css";

class Lenta extends React.Component {
	componentDidMount() {
		this.setEvents();
	}

	setEvents = () => {
		const currentPage = this.props.state.currentPage;
		const countEvents = this.props.state.countEvents;

		fetch(`http://localhost:4000/users?page=${currentPage}&count=${countEvents}`)
			.then(response => response.json())
			.then(response => {
				this.props.setEvents(response.events, response.countEvents);
			})
			.catch(error => alert(error));
	}

	changePage = (e) => {
		debugger;
		const newPage = e.target.innerText;
		const currentPage = newPage;
		const countEvents = this.props.state.countEvents;

		fetch(`http://localhost:4000/users?page=${currentPage}&count=${countEvents}`)
			.then(response => response.json())
			.then(response => this.props.changePage(newPage, response.events))
			.catch(error => alert(error));
	}

	render() {
		const page = this.props.state.pages.map(e => {
			return e == this.props.state.currentPage ?
				<div className={s.page + " button " + s.currentPage} onClick={this.changePage}>{e}</div> :
				<div className={s.page + " button"} onClick={this.changePage}>{e}</div>;
		});

		const events = this.props.state.events.map(e => {
			return <Event name={e.name} type={e.type} info={e.info} />;
		});

		return (
			<div className={s.Lenta}>
				<div className={s.head}>Лента Мероприятий</div>
				<div>
					{events}
				</div>
				<div className={s.pages}>
					{page}
				</div>
			</div>
		);
	}
}

export default Lenta;