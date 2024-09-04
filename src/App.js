import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained">Hello world</Button>
        <Alert severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
        <Card variant="outlined">Content</Card>
      </header>
    </div>
  );
}

export default App;
