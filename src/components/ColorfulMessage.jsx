import React from "react";

//App.jsx（呼び出し先）で以下のColorfulMessage関数を以下のように呼び出している
//<ColorfulMessage color="blue" message="お元気ですか？" />
//→このColorfulMessage関数に「color」と「message」情報をpropsとして
//渡して呼び出している。するとpropsオブジェクトが以下の
const ColorfulMessage = (props) => {
  //このColorfulMessage関数が呼び出された時に渡してきた値が
  //上記のpropsに格納されている
  console.log(props);
  //上記のconsole.logでpropsオブジェクトを確認することができる
  //colorとmessage情報が格納されているのでそれぞれ
  //props.color, props.messageとするとその値を参照することができる
  const contentStyle = {
    //propsを用いてカラーを動的に変更して以下のようにcolorのcssを変更している
    color: props.color,
    fontsize: "25px",
  };
  //propsを用いてメッセージを動的に変更して以下のようにHTMLを形成している
  
  //以下のreturnのうち、一行目は「propsにmessageと言うパラメーターを渡して呼び出したもの」で、
  //二行目は<ColorfulMessage color="brown" >me too!</ColorfulMessage>のように
  //ColorfulMessageタグとして呼び出して、そのタグの中身に値(me too)を記載して呼び出したもの
  //一行目はpropsのmessageと言うパラメーターに値が入っていたのでprops.messageとして取得できるが
  //二行目はprops.childrenと言うように「children」と言う特別な変数を参照することで値を取得できる
  return (
    <>
      <p style={contentStyle}>{props.message}</p>
      <p style={contentStyle}>{props.children}</p>
    </>
  );
};

export default ColorfulMessage;
