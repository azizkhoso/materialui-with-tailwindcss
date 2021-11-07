import './index.css';
import { StylesProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function App() {
  return (
    <StylesProvider injectFirst>
      <Button className="hover:bg-green-300">Hi there</Button>
    </StylesProvider>
  );
}

export default App;
