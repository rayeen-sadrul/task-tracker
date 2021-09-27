import React from "react";
const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`task ${task.reminder ? "reminder" : ""}`}
			onDoubleClick={() => onToggle(task.id)}>
			<h3>
				{task.text}{" "}
				<h4
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => onDelete(task.id)}>
					X
				</h4>
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
