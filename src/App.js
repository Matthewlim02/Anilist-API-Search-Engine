import './App.css';
import FavoritesAnime from './components/FavoritesAnime';
import PopularAnime from './components/PopularAnime';
import TrendingAnime from './components/TrendingAnime';
//import Search from './components/Search';

function App() {
  return (
    <div className="App">
       {/* <Search /> */}
        <TrendingAnime />
        <FavoritesAnime /> 
        <PopularAnime />
    </div>
  );
}

export default App;
