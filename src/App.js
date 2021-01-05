import { useState } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './App.css';
import PokeChart from './Poke';

const App = () => {
  const [name, setName] = useState("")
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true)
  };

  const switchCheck=()=>{
    if (show === true) {
      return (
        <PokeChart name = {name}/>
      )    }
  }

  return (
    <div>
      <h1>Type in a Pokemon and get its stats!</h1>
      <Form onSubmit={handleSubmit}>
      <Input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
      </Form>
      {switchCheck()}
    </div>
  );
}

export default App;
