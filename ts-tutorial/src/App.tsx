import React from "react";
import "./App.css";
import MyForm from "./MyForm";

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return <MyForm onSubmit={onSubmit} />;
};

export default App;
