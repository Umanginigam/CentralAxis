import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partner';
import Dashboard from './components/Dashboard';
import Future from './components/Future';
import DynamicResourceSection from './components/DynamicResourceSection';
import BookDemoSection from './components/Bookdemo';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Partners />
      <Dashboard />
      <Future />
      <DynamicResourceSection />
      <BookDemoSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
