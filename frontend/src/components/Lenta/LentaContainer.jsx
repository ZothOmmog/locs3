import React from "react";
import { connect } from "react-redux"
import Lenta from "./Lenta";
import { setEventsActionCreator, changePageActionCreator } from "../../redux/lentaReducer";

class LentaToApiContainer extends React.Component {
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

	changePage = (page) => {
		debugger;
		const newPage = page;
		const currentPage = newPage;
		const countEvents = this.props.state.countEvents;

		fetch(`http://localhost:4000/users?page=${currentPage}&count=${countEvents}`)
			.then(response => response.json())
			.then(response => this.props.changePage(newPage, response.events))
			.catch(error => alert(error));
	}

	render() {
		return (
			<Lenta
				pages={this.props.state.pages}
                events={this.props.state.events}
                currentPage={this.props.state.currentPage}
                changePage={this.changePage}
			/>
		);
	}
}

const mapStateToProps = (state) => ({ state: state.lentaPage });

const mapDispatchToProps = (dispatch) => ({
    setEvents(events, countEvents) {
        const setEvents = setEventsActionCreator(events, countEvents);
        dispatch(setEvents);
    },
    changePage(newPage, newEvents) {
        const changePage = changePageActionCreator(newPage, newEvents);
        dispatch(changePage);
    }
})

export const LentaContainer = connect(mapStateToProps, mapDispatchToProps)(LentaToApiContainer);