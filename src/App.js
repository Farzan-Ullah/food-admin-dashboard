import React from 'react';
import {Switch,Route} from 'react-router-dom';

 import HomeComponent from './common/homeComponent'
import AdminLoginComponent from './common/adminLoginComponent'
import DealerLoginComponent from './common/dealerLoginComponent'
import AdminHomeComponent from './admin/adminHomeComponent'
import MenuComponent from './common/menuComponent'
import DealerHomeComponent from './user/dealerHomeComponent'

class App extends React.Component
{
   constructor(props)
   {
     super(props)     
   }

   render(){
     return <>
        <MenuComponent/>
        
      <br/>
      <Switch>
          
         

          <Route exact path="/"> <HomeComponent/> </Route>
          <Route path="/admin"> <AdminHomeComponent/> </Route>
          <Route path="/adminlogin"> <AdminLoginComponent/> </Route>
          <Route path="/dealerlogin"> <DealerLoginComponent/> </Route>
          <Route path="/user"> <DealerHomeComponent/> </Route>
           
          

          
      </Switch>
     </>
   }
}

export default App;