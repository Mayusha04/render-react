// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// <DataProvider render={data => (
//   <h1>Hello {data.target}</h1>
// )}/>
// export default App;
import React from 'react'
  
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hiiii</h1>
        <SampleRenderProps />
      </div>
    )
  }
}
  
// Child component getting render props
class RenderPropsComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>everyone</h2>
        {this.props.render()}
      </div>
    )
  }
}
  
// Parent component sending render props to the child
class SampleRenderProps extends React.Component {
  render() {
    return (
      <RenderPropsComponent
        // Passing render props to the child component
        render={() => {
          return (
            <div>
              <h3 style={{color:"red",textAlign:"center"}}> 
               cgcs bootcamp
              </h3>
            </div>
          )
        }}
      />
    )
  }
}
  
export default App;

