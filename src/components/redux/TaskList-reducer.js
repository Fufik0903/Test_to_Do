import {v4 as uuidv4} from 'uuid';

const TYPE_DELETE_TASK = 'DELETE-TASK';
const TYPE_ONLABEL_CLICK = 'ONLABEL-CLICK';
const TYPE_ADD_TASK = 'ADD-TASK';
const TYPE_EDIT_TASK = 'EDIT-TASK';
const TYPE_TIMER = 'TYPE_TIMER';

const initialState = {
    tasks: [
        {
            text: 'Completed task',
            id: uuidv4(),
            completed: 'completed',
            checkbox: true,
            status: 'completed'
        },
        {
            text: 'Editing task',
            id: uuidv4(),
            completed: '',
            checkbox: false,
            status: 'active'
        },
        {
            text: 'Active task',
            id: uuidv4(),
            completed: '',
            checkbox: false,
            status: 'active'
        },
    ],
    itemsLeft: 1,
    itemsActive: 2,
};
const taskListReducer = (state = initialState, action) => {
    const stateCopy = {...state};
    const {tasks} = state;
    switch (action.type) {
        case TYPE_ADD_TASK: {
            const id = uuidv4();
            const newTask = {
                text: action.text,
                id,
                completed: '',
                checkbox: false,
                status: 'active',
            };
            stateCopy.tasks = [...tasks, newTask];
            const itemsLeft = stateCopy.tasks.filter((item) => item.completed === 'completed');
            const itemsActive = stateCopy.tasks.filter((item) => item.completed !== 'completed');
            return {
                tasks: stateCopy.tasks,
                itemsLeft: itemsLeft.length,
                itemsActive: itemsActive.length
            };
        }
        case TYPE_DELETE_TASK: {
            const newTask = tasks.filter((item) => item.id !== action.task.id);
            stateCopy.tasks = [...newTask];
            const itemsLeft = stateCopy.tasks.filter((item) => item.completed === 'completed');
            const itemsActive = stateCopy.tasks.filter((item) => item.completed !== 'completed');
            return {
                tasks: stateCopy.tasks,
                itemsLeft: itemsLeft.length,
                itemsActive: itemsActive.length
            };
        }
        case TYPE_ONLABEL_CLICK: {
            // eslint-disable-next-line no-debugger
            // debugger
            const newTasks = stateCopy.tasks.map((item) => {
                    if ((item.id === action.task.id) && (action.task.completed === '')) {
                        return {...item, completed: 'completed', status: 'completed', checkbox: true}
                    }
                    if ((item.id === action.task.id) && (action.task.completed === 'completed')) {
                        return {...item, completed: '', status: 'active', checkbox: false}
                    }
                    return item
                }
            );
            stateCopy.tasks = [...newTasks];
            const itemsLeft = stateCopy.tasks.filter((item) => item.completed === 'completed');
            const itemsActive = stateCopy.tasks.filter((item) => item.completed !== 'completed');
            return {
                tasks: stateCopy.tasks,
                itemsLeft: itemsLeft.length,
                itemsActive: itemsActive.length
            };
        }
        case TYPE_EDIT_TASK: {
            if (action.text.length < 25) {
                const newTasks = stateCopy.tasks.map((item) => {
                        if (item.id === action.itemId) {
                            return {...item, text: action.text}
                        }
                        return item
                    }
                );
                stateCopy.tasks = [...newTasks];
            }
            else{
                alert("Слшиком большое текст, вводите, не более 25 символов")
            }
            const itemsLeft = stateCopy.tasks.filter((item) => item.completed === 'completed');
            const itemsActive = stateCopy.tasks.filter((item) => item.completed !== 'completed');
            return {
                tasks: stateCopy.tasks,
                itemsLeft: itemsLeft.length,
                itemsActive: itemsActive.length
            };
        }
        default:
            return state;
    }
};
export const deleteItemAC = (task) => ({task, type: TYPE_DELETE_TASK});
export const labelClickAC = (task, checkbox) => ({task, checkbox, type: TYPE_ONLABEL_CLICK});
export const AddItemAC = (text) => ({text, type: TYPE_ADD_TASK});
export const editItemAC = (text, itemId) => ({text, itemId, type: TYPE_EDIT_TASK});
export const playTimerAC = (min, sec) => ({min, sec, type: TYPE_TIMER})
export default taskListReducer;
