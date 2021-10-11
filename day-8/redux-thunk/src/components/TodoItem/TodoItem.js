import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/actions/todo";

import "./TodoItem.css";

export default function TodoItem({ onClick, onDelete, ...task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.text);
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
          }}
        />
      ) : (
        <p
          className={task.status}
          onClick={(e) => {
            e.stopPropagation();
            onClick(task.id);
          }}
        >
          {task.text}
        </p>
      )}

      {isEditing ? (
        <div>
          <button
            className="todo-item-button"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                updateTodo({
                  id: task.id,
                  text: taskText,
                })
              );
              setIsEditing(false);
            }}
          >
            Kaydet
          </button>
        </div>
      ) : (
        <div>
          <button
            className="todo-item-button"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            düzenle
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(task.id);
            }}
          >
            sil
          </button>
        </div>
      )}
    </li>
  );
}
