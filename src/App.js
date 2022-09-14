import './App.css';
import Simpson from "./components/Simpson";

function App() {
  return (
    <div className={"wrap"}>
        <Simpson
            itemName={'Homer Jay Simpson'}
            photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
        />
        <Simpson
            itemName={'Marjorie Jacqueline Bouvier Simpson'}
            photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
        />
        <Simpson
            itemName={'Bartholomew JoJo Simpson'}
            photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
        />
        <Simpson
            itemName={'Margaret Evelyn Lenny Simpson'}
            photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
        />
        <Simpson
            itemName={'Lisa Marie Simpson'}
            photo={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}
        />
    </div>
  );
}

export default App;
