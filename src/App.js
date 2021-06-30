
import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {

  const people = [
    {name: "Jaime", student: false}, 
    {name: "Alex", student: true}, 
    {name: "Peter", student: true}, 
    {name: "Pilar", student: true}, 
    {name: "Lorianne", student: true}, 
    {name: "Salvo", student: true}, 
    {name: "G", student: true}, 
    {name: "Pallavi", student: true}, 
    {name: "Sasmitha", student: true}, 
    {name: "Victor", student: true}, 
    {name: "Natalie", student: true}
  ]

  return (
    <div className="App">
      <h1>Wild Code School Page</h1>
        <Card propsPeople={people} />
    </div>
  );
}

export default App;