import { connect } from "react-redux"
import Lenta from "./Lenta";
import { setEventsActionCreator, changePageActionCreator } from "../../redux/lentaReducer";

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

export const LentaContainer = connect(mapStateToProps, mapDispatchToProps)(Lenta);