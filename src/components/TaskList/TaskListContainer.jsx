import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { deleteItemAC, editItemAC, labelClickAC} from '../redux/TaskList-reducer';
import TaskList from './TaskList';

const TaskListContainer = (props) => <TaskList {...props} />;

const mapStateToProps = (state) => ({
    tasks: state.taskListReducer.tasks,
    itemsLeft: state.taskListReducer.itemsLeft,
    itemsActive: state.taskListReducer.itemsActive
});

const mapDispatchToProps = (dispatch) => ({
    onEditItem: (action, itemId) => {
        dispatch(editItemAC(action, itemId));
    },
    onDeleteItem: (action) => {
        dispatch(deleteItemAC(action));
    },
    onLabelClicked: (action, checkbox) => {
        dispatch(labelClickAC(action, checkbox));
    },
});
export default compose(connect(mapStateToProps, mapDispatchToProps))(TaskListContainer);
