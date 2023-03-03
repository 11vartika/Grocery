import { Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.min.js';
import Topbar from './components/common/header';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import About from '../src/pages/about';
import Contact from '../src/pages/contact';
import Faq from '../src/pages/faq';
import Home from '../src/pages/home';
import Shop from '../src/pages/shop';
import { NavLink } from "react-router-dom";
const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Layout className="layout">
    <Router>
      <Header>
        <Topbar />
      </Header>
      <Content>
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Content>
    </Router>
    
  </Layout>
  );
}

export default App;
