import React from"react";
import "./styles/style.css";
import Friend from "./friend";


const App = () =>{ 
  let friends = [{name:"harry",age:17,desc:"harryharryharry"},
  {name:"dick",age:17,desc:"dickdick"},
  {name:"ron",age:12,desc:"ronronron"},
                ];
  return (
    <div>
      <h1>hi</h1>
      {friends.map((friend) => (
        <Friend name={friend.name} age={friend.age} desc={friend.desc} />
      ))}
    </div>
  );

};

export default App;