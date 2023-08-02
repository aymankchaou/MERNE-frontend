import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Listarticles from './components/articlesRedux/Listarticles';
import NavScroll from './components/navScroll';
import ListeCategories from './components/categoriesRedux/ListeCategories';
import ListeScategories from './components/scategoriesRedux/ListeScategories';
import Cart from './components/articlesRedux/Cart';
import StripePayment from './components/articlesRedux/StripePayment';
import PdfCart from './components/articlesRedux/PdfCart';
import AffichearticleAdmin from './admin/components/articles/AffichearticleAdmin';
import { ToastContainer } from 'react-toastify';
import Login from './admin/components/Login';
import { Logout } from '@mui/icons-material';
import Register from './admin/components/Register';
import ProtectedRoutes from './admin/components/ProtectedRoute';
import Nopage from './components/Nopage';
import Banner from './components/styles/Banner';


function App() {
  return (
    <div>
      <ToastContainer />

      <Router>
        <NavScroll/>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/listeadmin' element={<AffichearticleAdmin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/articles" element={<Listarticles />} />
            <Route path="/categories" element={<ListeCategories />} />
            <Route path="/scategories" element={<ListeScategories />} />
            <Route path='/pay/:total' element={<StripePayment />} />
            <Route path='/pdfcart' element={<PdfCart />} />
          </Route>
          <Route path="/" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Nopage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
