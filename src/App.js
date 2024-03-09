import './App.css';
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import Rowmovies from './component/Rowmovies/Rowmovies';
import { originals,action,comedy,horror,trending,romance,documentries } from './component/urls';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowmovies url={originals} title='Netflix Originals'/>
      <Rowmovies url={trending} title='Trending' isSmall/>
      <Rowmovies url={action} title='Action' isSmall/>
      <Rowmovies url={romance} title='Romance' isSmall/>
      <Rowmovies url={comedy} title='Comedy' isSmall/>
      <Rowmovies url={horror} title='Horror' isSmall/>
      <Rowmovies url={romance} title='Romance' isSmall/>
      <Rowmovies url={documentries} title='Documentries' isSmall/>
    </div>
  );
}

export default App;
