import React from "react";
//このファイル名は「App.jsx」となっている。jsでも問題なく動作するけど
//Reactのコンポーネントというのを明示的にするためにも
//hoge.jsxと言うファイル名にすることが一般的
import ColorfulMessage from "./components/ColorfulMessage";

const onClickButton = () => alert();

const App = () => {
  //以下のpタグの中の{}の中はjsのコードとみなされる
  //→contentStyleはjsのコードとみなされ、colorとfontsizeが指定されていると認識される
  return (
    <>
      <h1>Hi！</h1>
      <ColorfulMessage color="blue" message="You r Fine？" />
      <ColorfulMessage color="pink" message="Fine!" />
      <ColorfulMessage color="brown">me too!</ColorfulMessage>
      <button onClick={onClickButton}>yeah</button>
    </>
  );
};

//const AppとしたのでAppをエクスポートできるようにする
export default App;
