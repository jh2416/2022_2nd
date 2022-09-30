import logo from './logo.svg';
import './App.css';


function App() {
  const name = '리액트'; //리액트 말고 다른 이름이면 '리액트가 아닙니다.'
  return (
    <div>
      {name ==='리액트'?(
      <h1>리액트입니다.</h1>
    ) : (
      <h2>리액트가 아닙니다.</h2>
    )}
    </div>
  );
}

export default App;
