import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
//同階層のApp.jsxをインポートした→App.jsxのAppコンポーネントの処理をこのファイルで
//利用できるようになった

//App.jsxをインポートしたので以下でAppを使えるようになっている
ReactDom.render(<App />, document.getElementById("root"));
