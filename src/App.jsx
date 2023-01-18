import React, { useState, useEffect } from "react";
//このファイル名は「App.jsx」となっている。jsでも問題なく動作するけど
//Reactのコンポーネントというのを明示的にするためにも
//hoge.jsxと言うファイル名にすることが一般的
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  //[stateの変数名, stateを更新する関数名]の順番で分割代入してuseStateを使う
  const [num, setNum] = useState(1);
  const [faceState, faceChange] = useState(true);
  const onClickCountUp = () => {
    //useStateの関数名を「setNum」としたので例えばsetNum(10000)とするとnumの値が動的に
    //10000に切り替わる
    setNum(num + 1);
  };
  const onClickFaceChange = () => {
    faceChange(!faceState);
  };
  //以下のuseEffectにより、再レンダリングの制御を行える
  //以下ではuseEffeectの第二引数の配列に[num]を入れているので
  //numというstateの状態が更新された時だけこのuseEfect内のメソッドが実行される
  //つまりfaceStatusの更新が行われてもこのuseEffect内の関数は実行されないので
  //状態の更新をトリガーにした関数の発動を干渉させ合わせずに行うことができるというのが
  //このuseEffectのメリット
  useEffect(() => {
    //以下のif文をuseEffect内に入れて、そのuseEffectの第二引数の配列に
    //[num]を指定したことにより、numの値が変更された時だけこのif文の処理が走り、
    //faceStateの値の更新から分離できるので処理が干渉し合わず、いい感じにうまくいく
    if (num % 3 === 0) {
      //numの値が変化した時に再レンダリングが行われる
      //再レンダリングされるとReactがこのコードをまた上から順に下向きに読み込み、そして画面がレンダリングされる
      //もしfaceChangeだけをいじるとnum%3が0になりtrueになったときに再レンダリングが行われる
      //するとReactはまたこのコードを上から下に順に読み込み、
      //再びこのif分を読み込むことになる
      //するとnumの値は変わっていないのでこのif文の条件分岐はまたtrueになり、
      //するとまた再レンダリングが行われ…という無限ループになる
      //（「Uncaught Error: Too many re-renders. React limits the number of」というエラーが出る）
      //なので「faceState || faceChange(true);」という感じで、faceStateの値が「trueの時だけ」
      //このif文の中の処理を実行するという形にすることで無限ループを解決できる
      //「A || B」とするとAがtrueの時は、Bを作動させると言う意味になる
      faceState || faceChange(true);
    } else {
      faceState && faceChange(false);
    }
  }, [num]);

  //以下のpタグの中の{}の中はjsのコードとみなされる
  //→contentStyleはjsのコードとみなされ、colorとfontsizeが指定されていると認識される
  return (
    <>
      <h1>Hi！</h1>
      <ColorfulMessage color="blue" message="You r Fine？" />
      <ColorfulMessage color="pink" message="Fine!" />
      <ColorfulMessage color="brown">me too!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickFaceChange}>顔変更</button>
      <p>{num}</p>
      {faceState && <p>٩( ᐛ )و</p>}
    </>
  );
};

//const AppとしたのでAppをエクスポートできるようにする
export default App;
