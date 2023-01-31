import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeText, onClickAdd, disabled } = props;
  return (
    <div className="input-area">
      <input
        placeholder="やることを入力してください"
        value={todoText}
        onChange={onChangeText}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClickAdd}>追加</button>
    </div>
  );
};
