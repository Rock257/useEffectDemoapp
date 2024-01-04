import useState from "react";

const DemoApp = () => {
  const [data, setData] = useState("post");
  console.log(data);

  return (
    <div className="useeffect">
      <button onClick={() => setData("post")}>Post</button>
      <button onClick={() => setData("about")}>About</button>
      <button onClick={() => setData("comment")}>Comment</button>
      <div className="show">
        <h2>{data} </h2>
      </div>
    </div>
  );
};
export default DemoApp;
