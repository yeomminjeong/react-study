import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [sub_title, changeTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  console.log(sub_title);
  let [likeBtn, likeCount] = useState(0);
  let onClick = () => {
    likeCount(likeBtn + 1);
  };
  let onClick2 = () => {
    let copy = [...sub_title];
    copy[0] = "여자코트 추천";
    changeTitle(copy);
  };
  function sort() {
    let copy = [...sub_title];
    changeTitle(copy.sort());
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {sub_title[0]} <span onClick={onClick}>⭐️</span> {likeBtn}
          <button onClick={onClick2}>change!</button>
          <button onClick={sort}>sort</button>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{sub_title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{sub_title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
} //component

export default App;
