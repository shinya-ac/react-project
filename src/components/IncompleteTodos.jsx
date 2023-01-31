import React from "react";

export const IncompleteTodos = (props) => {
    const {incompleteTodos, onCkickCangeStatus, onClickRemove} = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ui>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onCkickCangeStatus(index)}>完了</button>

              {/*
                  onClickRemoveに「index」を渡す際は無名のアロー関数を作って渡すことで
                  即時にonClickRemoveが動くわけではなくなるのでそういうものだと一旦覚えておく
                */}
              <button onClick={() => onClickRemove(index)}>削除</button>
            </div>
          );
        })}
      </ui>
    </div>
  );
};
