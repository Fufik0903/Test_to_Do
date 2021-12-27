import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import TaskOnHook from "../Task/TaskOnHook";

const TaskList = (props) => {
    const {tasks} = props;
    const elements = tasks.map((item) =>
        item.completed !== 'completed' ? (
            <Route
                exact path="/active" render={() => (<TaskOnHook key={item.id} item={item}{...props}/>)}
            />
        ) :  (
            <Route
                exact path="/completed" render={() => (<TaskOnHook key={item.id} item={item}{...props}/>)}
            />
        )
    );
    const elementsAll = tasks.map((item) => (
        <Route
            exact path="/all" render={() => (<TaskOnHook key={item.id}item={item}{...props}/>)}
        />
    ));
    return (
        <ul className="todo-list">
            {elementsAll}
            {elements}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.instanceOf(Array).isRequired,
};

export default TaskList;
