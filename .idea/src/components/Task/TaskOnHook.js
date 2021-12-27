import React, { useState} from 'react';
import PropTypes from "prop-types";

const TaskOnHook = (props) => (<HookTask {...props}/>)
const HookTask = (props) => {
    const {onDeleteItem, item, onEditItem, onLabelClicked} = props;
    const {completed, id, text, checkbox, status} = item;
    const [editMode, setEditMode] = useState(false)
    const [itemText, setItemText] = useState('')
    console.log(item)
    const deactivateEditMode = (el) => {
        if (el.key === 'Enter') {
            setEditMode(false)
            onEditItem(itemText, id);
        }
    };
    const onTextChange = (el) => {
        setItemText(el.currentTarget.value);
    };
    return (
        <li className={completed} key={id}>
            {!editMode && (
                <div className="view">
                    {!checkbox && (
                        <div>
                            <input className="toggle" type="checkbox" defaultChecked={false}
                                   onClick={() => {
                                       onLabelClicked(item, checkbox)
                                   }}/>
                            <label>
                                <span className="description" role="presentation"
                                      onClick={() => {
                                          onLabelClicked(item, checkbox)
                                      }}>
                                    {text}
                                </span>
                                <span className="status">status: {status}</span>
                            </label>
                        </div>
                    )}
                    {checkbox && (
                        <div>
                            <input className="toggle" type="checkbox" defaultChecked
                                   onClick={() => {
                                       onLabelClicked(item, checkbox)
                                   }}/>
                            <label>
									<span className="description" role="presentation"
                                          onClick={() => {
                                              onLabelClicked(item, checkbox)
                                          }}>
										{text}
									</span>
                                    <span className="status">status: {status}</span>
                            </label>
                        </div>
                    )}
                    <div>
                        <button type="button" className="icon icon-edit" onClick={() => setEditMode(true)}
                                aria-label="edit-btn"/>
                    </div>
                    <button
                        type="button" className="icon icon-destroy"
                        onClick={() => {
                            onDeleteItem(item);
                        }} aria-label="destroy-btn"
                    />
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        className="new-todo" placeholder="Edit your message"
                        onKeyPress={deactivateEditMode} onChange={onTextChange}
                    />
                </div>
            )}
        </li>
    )
}
HookTask.propTypes = {
    onEditItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onLabelClicked: PropTypes.func.isRequired,
    item: PropTypes.instanceOf(Object).isRequired,
};
export default TaskOnHook;
