// import logo from "./logo.svg";
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
  let [modal_title, setModalTitle] = useState(0);
  let [input_value, setInputValue] = useState("");

  let changeTitle = () => {
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

      {sub_title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {sub_title[i]}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...likeBtn];
                  copy[i] = copy[i] + 1;
                  console.log(copy);
                  setCount(copy);
                }}
              >
                🎐
              </span>{" "}
              {likeBtn[i]}
              <button onClick={changeTitle}>change!</button>
              <button onClick={sort}>sort</button>
              <button
                onClick={() => {
                  let copy = [...sub_title];
                  copy.splice(i, 1);
                  setTitle(copy);
                }}
              >
                delete
              </button>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <Emoji />

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
          // console.log(input_value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...sub_title];
          copy.unshift(input_value);
          setTitle(copy);
        }}
      >
        글발행
      </button>
      {modal === true ? (
        <Modal modal_title={modal_title} sub_title={sub_title} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.sub_title[props.modal_title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  );
} //component

function Emoji() {
  return <span>🎐</span>;
}

export default App;
