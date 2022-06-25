import NavBar from "./navbar.js";
import './App.css';
import Form from "./form.js"


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />
      </div>
      <div className="row justify-content-center">
        <div className="content-box">
        <Form />
      </div> 
       </div>
    </div>
  );
}

export default App;
