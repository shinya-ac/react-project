import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickRedo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTodo</p>
      <ui>
        {completeTodos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickRedo(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ui>
    </div>
  );
};
