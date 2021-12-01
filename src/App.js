import './App.css';
import Users from './components/Users';
import Moderators from './components/Moderators';
import Owners from './components/Owners';

function App() {
  return (
    <div className='App'>
      <body className='App-header'>
        <div class="column">
        <Users />
        </div>
        <div class="column">
        <Moderators />
        </div>
        <div class="column">
        <Owners />
        </div>
      </body>
    </div>
  );
}

export default App;
