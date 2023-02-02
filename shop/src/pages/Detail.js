import { useParams } from "react-router-dom";

function DetailPage(props) {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="img/img0.jpeg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.items[id].title}</h4>
          <p>{props.items[id].content}</p>
          <p>{props.items[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
