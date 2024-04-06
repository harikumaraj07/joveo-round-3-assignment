import logo from './logo.svg';
import './App.css';
import { FileSystemProvider } from './Context/FileSystemContext';
import { Movies } from './Screens/Movies/Movies';
// import { FileSystemView } from './Screens/FileSystemView/FileSystemView';

function App() {
  return (
    <div className="App">
      <FileSystemProvider>
        {/* <FileSystemView /> */}
        <Movies />
      </FileSystemProvider>
    </div>
  );
}

export default App;
