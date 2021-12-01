import './App.css';
import Users from './components/Users';
import Moderators from './components/Moderators';
import Owners from './components/Owners';

function App() {
  return (
    <div className='App'>
      <body className='App-header'>
        <Users />
        <Moderators />
        <Owners />
      </body>
    </div>
  );
}

export default App;
