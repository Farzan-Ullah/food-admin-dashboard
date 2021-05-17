import React from 'react';
import {Redirect} from 'react-router-dom';
import {LOGIN_ADMIN} from '../serverUrls';


export default class AdminLoginComponent extends React.Component {
    constructor(props) {
        super(props)
         this.state = {
            loginmsg:'',
            loginstatus:false
        }
    }

        login = ()=>{
          fetch(LOGIN_ADMIN,{
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body: JSON.stringify({
            
            email : this.loginemail.value,
            
            password : this.loginpass.value
        })
     }).then(response=>response.json()).then(data=>
         {
            if(data.status)
               this.setState({loginstatus:true})
            else
               this.setState({loginmsg:'Login Failed !'})
                   
         });
   
    }
     
     
    render() {
  if(this.state.loginstatus){
            return<Redirect to="/adminhome"/>
        }

        return <>
            <main id="main">
                <section id="contact" class="wow fadeInUp">
                    <div class="container">


                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="section-header">
                                    <h2>Admin Login</h2>
                                </div>
                                <div class="container">
                                    <div class="form">
    
    
             <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="email" class="form-control" value="admin@abcd.com" name="email" id="email" ref={c=>this.loginemail=c} placeholder="Your Email" />
                </div>
                <div class="form-group col-md-6">
                    <input type="password" class="form-control" value="123" name="email" id="email" ref={c=>this.loginpass=c} placeholder="Your Password" />
                </div>
            </div>
            <div class="text-center"><button onClick={this.login} class='btn btn-info'>Login</button>
             &nbsp;&nbsp;&nbsp; <b class='text-danger'>{this.state.loginmsg}</b>
            </div>
    
    
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>



                </section>
            </main>

        </>
    }
}