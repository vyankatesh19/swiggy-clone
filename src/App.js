import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FilterSortGrid from './Components/FilterSortGrid/FilterSortGrid';
import Cards from './Components/Cards/Cards';
import Banner from './Components/Banner/Banner';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Banner />
      <FilterSortGrid />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
