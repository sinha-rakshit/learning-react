import "./App.css";

const Person = () => {
  return (
    <>
      <h1>First Name: Rakshit</h1>
      <h2>Last Name: Sinha</h2>
      <h2>Age: 18</h2>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Person />
    </div>
  );
};

export default App;
