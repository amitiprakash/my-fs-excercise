//static page with with dynamic variable, component creation and object restructuring

const Hello = ({ name, age }) => {
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - age
    }
  
    return (
      <div>
        <p>Hello Tag {name}, age is {age} years</p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }
  
  const App = () => {
    const now = new Date()
    const a= 10
    const b = 20
    const age =10
    return (
      <div className="App">
          <p>
            Hello Wrold, it is {now.toString()}
          </p>
          <p>{a} plus {b} is {a+b}</p>
          <Hello name="TIM" age={26+10}/>
          <Hello name="Mary" age={age}/>
  
      </div>
    );
  }
  
  export default App;
  


  //index.js

//   import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
