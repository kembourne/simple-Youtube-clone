
import './App.css';
import Home from './Components/Home';
import Playing from './Components/Playing';
import {Routes,Route} from 'react-router-dom'
import SearchFeed from './Components/SearchFeed'
import PageDetail from './Components/PageDetail';

function App() {
  return (<>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/search/:videoId' element={<Playing/>}/>
  <Route path='/:videoId' element={<Playing/>}/>
  <Route path='/search' element={<SearchFeed />}/>
  <Route path='/pageDetails' element={<PageDetail />}/>
</Routes>

  </>
    );
}

export default App;
