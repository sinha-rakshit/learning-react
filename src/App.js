import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.FirstName}</h1>
      <h2>Last Name: {props.LastName}</h2>
      <h2>Age: {props.Age}</h2>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Person FirstName={"Rakshit"} LastName={"Sinha"} Age={21} />
      <Person FirstName={"Yash"} LastName={"Raj"} Age={19} />
    </div>
  );
};

export default App;
