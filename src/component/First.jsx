import { useEffect, useState } from "react";
import "./first.css";

function Example() {
  const [data, setData] = useState("posts");
  const [items, setItems] = useState([]);

  // const [counter ,setCounter] = useState(0)
  // function handleCounter(){
  //     setCounter(()=>(counter+1))
  // }
  // useEffect(()=>{
  //     setTimeout(()=> handleCounter() , 10000)
  // } , [])

  // console.log("Lets render")

  useEffect(() => {
    // console.log('render when click' + " " + data)
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then((response) => response.json())
      // .then(json => console.log(json))
      .then((json) => setItems(json));
  }, [data]);

  return (
    <div className="example">
      <h2>Learn useEffect</h2>
      <button onClick={() => setData("posts")}>Post</button>
      <button onClick={() => setData("users")}>User</button>
      <button onClick={() => setData("comments")}>Comments</button>
      <div className="content">
        <h2>{data} </h2>
        <h4>
          {items.map((item) => {
            const result = JSON.stringify(item);
            return result;
          })}
        </h4>
      </div>

      {/* <div className="counter">
                <h1>{counter}</h1>
                <button onClick={handleCounter}>Start Counter</button>
            </div> */}
    </div>
  );
}

export default Example;
