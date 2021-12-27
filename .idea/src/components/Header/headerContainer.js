import {connect} from 'react-redux';
import Header from './header';
import {AddItemAC} from '../redux/TaskList-reducer';

const mapStateToProps = (state) => ({
    tasks: state.taskListReducer.tasks,
    itemsLeft: state.taskListReducer.itemsLeft,
});


const mapDispatchToProps = (dispatch) => ({
    handleKeyPress: (text, min, sec) => {
        dispatch(AddItemAC(text, min, sec));
    },
});
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
