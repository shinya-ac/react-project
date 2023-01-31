import React, { useState, useEffect } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

//このファイル名は「App.jsx」となっている。jsでも問題なく動作するけど
//Reactのコンポーネントというのを明示的にするためにも
//hoge.jsxと言うファイル名にすることが一般的

export const App = () => {
  const [todoText, setTodoText] = useState("aaaaaaa");
  const [incompleteTodos, setIncompleteTodos] = useState(["aiaiai", "iaiaia"]);
  const [completeTodos, setCompleteTodos] = useState(["hoge", "fuga"]);

  const onClickAdd = () => {
    if (todoText === "") return;
    //const newTodos = incompleteTodos.push(todoText)
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onChangeText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickRemove = (index) => {
    //incompleteTodosの配列のi番目の要素を消す
    //iとは、li要素の中のi番目のiと一致する
    //まずはli要素のi番目という識別IDをIDを認識する必要がある
    //次にincompleteTodos[i].Remove()的な感じでそのi番目の要素を削除する動作を入れる
    //li要素に配列をmap展開している箇所を「incompleteTodos.map((todo, index) => {...}」
    //上記のように変更した→mapの配列の順番がそのまま識別子(index)になるので、このindexを受け取れればOK
    //なのでonClickRemoveに「index」というパラメーターをもらった
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); //indexが3なら「3番目の要素を一個削除する」という意味になる
    setIncompleteTodos(newTodos);
  };
  const onCkickCangeStatus = (index) => {
    const newTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodos);

    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); //indexが3なら「3番目の要素を一個削除する」という意味になる
    setIncompleteTodos(newIncompleteTodos);
  };
  const onClickRedo = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    //以下、mapを使用してuseState配列を順にレンダリングするときは
    //keyを指定する必要がある
    <>
      <InputTodo
        todoText={todoText}
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p>タスクの上限は五個までです</p>}

      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onCkickCangeStatus={onCkickCangeStatus}
        onClickRemove={onClickRemove}
      />
      <CompleteTodos completeTodos={completeTodos} onClickRedo={onClickRedo} />
    </>
  );
};
