import React from 'react';
import ReactDOM from 'react-dom';
import './Feed.css';

class Feed extends React.Component {
  render(){
  return(
  <div className = "container">
    <div className="linha">
      <div className="caixa">
        <a href="https://Visualizacao-React-PedroJoaquim2.webuono.repl.co" target="_blank" rel ="noopener noreferrer"> 
          <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE06Fw0zibZpXLGO5l32DOC_TSHbdHDc1sFA&usqp=CAU" alt="P1" />
        </a>
      </div>
      <div className="caixa">
        <a href="https://Visualizacao-React-PedroJoaquim2.webuono.repl.co" target="_blank" rel ="noopener noreferrer">
          <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE06Fw0zibZpXLGO5l32DOC_TSHbdHDc1sFA&usqp=CAU " alt="P2"/>  
       </a>
      </div>
    </div>
   </div>
    );
  }
}

ReactDOM.render(
  <Feed />,
  document.getElementById('root')
);

export default Feed;