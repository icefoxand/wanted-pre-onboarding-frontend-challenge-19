import React, {useState} from 'react';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['할일 추천','뭐할래?']);

  let todo_item = '할일 목록';

  return (
    <div className="App">
      <div className="black-nav">
        <p style={{color :'red', fontSize:'30px'}}>my todo-list</p>
      </div>
      <div className='todo-list'>
        <h2>{글제목[1]}</h2>
        <p>2월 23일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
