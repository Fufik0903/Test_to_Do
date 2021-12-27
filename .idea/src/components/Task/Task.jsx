import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {
	state = {
		editMode: false,
		text: { ...this.props },
		id: { ...this.props },
		checkbox: false,
		dateNow: { ...this.props },
	};

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 5000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
		});
	};

	deactivateEditMode = (el) => {
		const { onEditItem } = this.props;
		if (el.key === 'Enter') {
			this.setState({
				editMode: false,
			});
			onEditItem(this.state);
		}
	};

	onTextChange = (el) => {
		this.setState({
			text: el.currentTarget.value,
		});
	};

	activateCheckBox = () => {
		const { onLabelClicked, item } = this.props;
		this.setState({
			checkbox: true,
		});
		item.completed = ' completed';
		onLabelClicked(item);
	};

	deactivateCheckBox = () => {
		const { onLabelClicked, item } = this.props;
		this.setState({
			checkbox: false,
		});
		item.completed = ' ';
		onLabelClicked(item);
	};

	tick() {
		const { onChangeTime } = this.props;
		this.setState({
			dateNow: onChangeTime(),
		});
		onChangeTime();
	}

	render() {
		const { onDeleteItem, item } = this.props;
		const { completed, id, dateNow, text } = item;
		const { editMode, checkbox } = this.state;
		return (
			<li className={completed} key={id}>
				{!editMode && (
					<div className="view">
						{!checkbox && (
							<div>
								<input className="toggle" type="checkbox" defaultChecked={false} onClick={this.activateCheckBox} />
								<label>
									<span className="description" onClick={this.activateCheckBox} role="presentation">
										{text}
									</span>
									<span className="created">created {dateNow}</span>
								</label>
							</div>
						)}
						{checkbox && (
							<div>
								<input className="toggle" type="checkbox" defaultChecked onClick={this.deactivateCheckBox} />
								<label>
									<span className="description" role="presentation" onClick={this.deactivateCheckBox}>
										{text}
									</span>
									<span className="created">created {dateNow}</span>
								</label>
							</div>
						)}
						<div>
							<button type="button" className="icon icon-edit" onClick={this.activateEditMode} aria-label="edit-btn" />
						</div>
						<button
							type="button"
							className="icon icon-destroy"
							onClick={() => {
								onDeleteItem(item);
							}}
							aria-label="destroy-btn"
						/>
					</div>
				)}
				{editMode && (
					<div>
						<input
							className="new-todo"
							placeholder="Edit your message"
							onKeyPress={this.deactivateEditMode}
							onChange={this.onTextChange}
						/>
					</div>
				)}
			</li>
		);
	}
}
Task.propTypes = {
	onEditItem: PropTypes.func.isRequired,
	onDeleteItem: PropTypes.func.isRequired,
	onLabelClicked: PropTypes.func.isRequired,
	onChangeTime: PropTypes.func.isRequired,
	item: PropTypes.instanceOf(Object).isRequired,
};

export default Task;
