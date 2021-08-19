import React from 'react';

import HomePage from '../../pages/HomePage';
import DataIn from '../../pages/DataIn';
import Survice from '../../pages/Survice';
import Error from '../../pages/Error';
import ContactPage from '../../pages/ContactPage';
import { Route,Switch } from 'react-router-dom';


const App: React.FC=()=>{
 return <div>
     <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/storedata' component={DataIn} />
         <Route path= '/survice' component={Survice}/>
         <Route path='/contact' component={ContactPage}/>
         <Route  component={Error} />
     
     </Switch>
     
 </div>
}

export default App;
