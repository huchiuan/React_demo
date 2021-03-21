import React from"react";
import "./styles/style.css";

const App = () =>{ 
  let friends = ["edison","manting","tina"];
  return (
    <div>
      <h1>hi</h1>
      <p>我的朋友有:</p>
      {
        friends.map(
          (friend)=> {
          return <p>{friend}</p>;
        }
        )
      }
    </div>
  );

};

export default App;