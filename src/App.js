import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Gas Notifier Signup";
  }, []);
  
  return (
    <>
      <Header>Gas Notifier Signup</Header>
      <div className="main-container">
        <Form />
      </div>
    </>
  );
}

export default App;
