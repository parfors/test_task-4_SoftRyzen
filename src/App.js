import Blog from 'components/sections/Blog/Blog';
import Contact from 'components/sections/Contact/Contact';
import Footer from 'components/sections/Footer/Footer';
import Gallery from 'components/sections/Gallery/Gallery';
import Home from 'components/sections/Home/Home';
import Team from 'components/sections/Team/Team';

function App() {
  return (
    <>
      <Home />
      <Gallery />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
