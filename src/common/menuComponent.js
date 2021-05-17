import React from 'react';
import {LOGOUT_DEALER,CHECK_SESSION} from '../serverUrls'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export default class MenuComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            islogin: false,
            usertype : 'default',
            islogout: false
        }
      
    }

     logout = ()=>{
          fetch(LOGOUT_DEALER).then(res=>res.json()).then(data=>{
              localStorage.removeItem('dealername');
           this.setState({usertype:'deafult',islogin:false,islogout:data.status})
     });
    }

     check = ()=>{
         fetch(CHECK_SESSION).then(res=>res.json()).then(data=>{
           this.setState({islogin:data.status,usertype:data.type})
         });
     }
     
    render(){
             
        console.log(this.state);

        var menucomp = '';
        if(this.state.islogin)
        {
            if(this.state.usertype=="dealer"){
          menucomp =  <ul class="nav-menu">
                        <li class="menu-active">
                            <Link to="/dealerhome">Home</Link></li>
                        <li class="menu-active">                            
                          <button class='btn btn-info' onClick={this.logout}> Logout</button></li>
                    </ul>
            }else{
                  menucomp =  <ul class="nav-menu">
                        <li class="menu-active">
                            <Link to="/adminhome">Home</Link></li>
                            <li class="menu-active">
                            <Link to="/admincategory">Category</Link></li>
                            <li class="menu-active">
                            <Link to="/adminproduct">Products</Link></li>
                        <li class="menu-active">                            
                          <button class='btn btn-info' onClick={this.logout}> Logout</button></li>
                    </ul>
            }
        }
        else
        {
               menucomp =   <ul class="nav-menu">
                        <li class="menu-active">
                            <Link to="/">Home</Link></li>
                        <li class="menu-active">                            
                            <Link to="/user">User Page</Link></li>
                        <li class="menu-active">                            
                            <Link to="/admin">Admin Page</Link></li>
                    </ul>
        }

        if(this.state.islogout){
            return <Redirect to="/"/>
        }

        return <>
        <header id="header">
            <div class="container">
             
                <div id="logo" class="pull-left">
                    <h1><a href="/" class="scrollto">Food<span>Admin</span></a></h1>
                   
                </div>

                <nav id="nav-menu-container">
                    {menucomp}
                </nav>
            </div>
            </header>
        </>
    }
}