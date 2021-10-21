import './App_13.scss';
import Homepage_13 from './pages/Homepage_13';
import {Switch,Route} from 'react-router-dom';
import ShopTwoPage_13 from './pages/ShopTwoPage_13';
import ContactPage_13 from './pages/ContactPage_13';
import SigninPage_13 from './pages/SigninPage_13';
import Header_13 from './components/Header_13';

function App_13() {
  return (
    <div>
      <Header_13 />
      <Switch>
      <Route exact path='/' component={Homepage_13} />
      <Route exact path='/shop_13' component={ShopTwoPage_13} />
      <Route exact path='/contact_13' component={ContactPage_13} />
      <Route exact path='/Signin_13' component={SigninPage_13} />
      </Switch>
    </div>
  );
}

export default App_13;
