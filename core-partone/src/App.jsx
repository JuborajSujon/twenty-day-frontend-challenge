import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import User from "./User";

function App() {
  function handleClick() {
    console.log("Button Clicked");
  }

  const handleClick2 = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 ">
      <h1 className="text-4xl font-bold">Welcome to Dark Mode!</h1>
      <h1 className="text-4xl font-bold">React Core Concept 2</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}>
        Click Me
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick2}>
        Click Me 2
      </button>

      <Counter />

      <Team />

      <User />
    </div>
  );
}

export default App;
