import './App.css';
import Article from './components/Article';
import ArticleSlider from './components/ArticleSlider';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="banner">
      </div>
      <div className="wrapper">
        <h2>Latest Articles</h2>
        <div className="container">  
          <Article/>
          <ArticleSlider/>
        </div>
      </div>
    </>
  );
}

export default App;
