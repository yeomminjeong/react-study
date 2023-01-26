import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [sub_title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [likeBtn, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  let onClick = () => {
    for (let i = 0; i < 3; i++) {
      if (likeBtn[i]) {
        setCount(likeBtn[i] + 1);
      }
    }
  };

  let onClick2 = () => {
    let copy = [...sub_title];
    copy[0] = "여자코트 추천";
    setTitle(copy);
  };
  function sort() {
    let copy = [...sub_title];
    setTitle(copy.sort());
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>
          {sub_title[0]} <span onClick={onClick}>⭐️</span> {likeBtn}
          <button onClick={onClick2}>change!</button>
          <button onClick={sort}>sort</button>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
            // setModal(modal === true ? false : true);
          }}
        >
          {sub_title[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{sub_title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {sub_title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {sub_title[i]} <span onClick={onClick}>⭐️</span> {likeBtn[i]}
              <button onClick={onClick2}>change!</button>
              <button onClick={sort}>sort</button>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <Emoji />
      {modal === true ? <Modal></Modal> : null}
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

function Emoji() {
  return <span>🎐</span>;
}
export default App;
