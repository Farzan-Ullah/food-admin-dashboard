import React from 'react';
import {Redirect} from 'react-router-dom';
import {REGISTER_DEALER,LOGIN_DEALER} from '../serverUrls'


export default class DealerLoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg:'',
            loginmsg:'',
            loginstatus:false
        }
    }

    login = ()=>{
          fetch(LOGIN_DEALER,{
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
            if(data.status){
                localStorage.setItem('dealername',data.name)
               this.setState({loginstatus:true})
            }
            else
               this.setState({loginmsg:'Login Failed !'})
                   
         });
   
    }

   register = ()=>{
    //    console.log(this.dname.value)
    //    console.log(this.email.value)
    //    console.log(this.phone.value)
    //    console.log(this.pwd.value)
    //    console.log(REGISTER_DEALER)

    fetch(REGISTER_DEALER,{
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body: JSON.stringify({
            dealer_name : this.dname.value,
            email : this.email.value,
            phone : this.phone.value,
            password : this.pwd.value
        })
     }).then(response=>response.json()).then(data=>
         {
            this.setState({msg:data.msg})
         });
   }

    render() {
        if(this.state.loginstatus){
            return<Redirect to="/dealerhome"/>
        }
        return <>
            <main id="main">
                <section id="contact" class="wow fadeInUp">
                    <div class="container">


                        <div class="row">

                            <div class="col-lg-6 col-md-6">
                                <div class="section-header">
                                    <h2>Dealer Registeration</h2>
                                </div>
                                <div class="container">
                                    <div class="form">
                                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                                        <div id="errormessage"></div>
     
            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <input type="text" name="name" class="form-control" ref={c=>this.dname=c} id="name" placeholder="Your Name" />
                                                    <div class="validation"></div>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <input type="email" class="form-control" ref={c=>this.email=c} name="email" id="email" placeholder="Your Email"  />
                                                    <div class="validation"></div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" ref={c=>this.phone=c} name="phone" id="phone" placeholder="Phone" />
                                                <div class="validation"></div>
                                            </div>
                                            <div class="form-group">
                                            <input type="password" class="form-control" ref={c=>this.pwd=c} name="password" id="password" placeholder="password" />
                                                <div class="validation"></div>
                                            </div>
                                            <div class="text-center"><button class='btn btn-info' onClick={this.register}>Register</button>
                                            &nbsp;&nbsp;&nbsp; <b class='text-danger'>{this.state.msg}</b>
                                            </div>
                                       
                                    </div>

                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="section-header">
                                    <h2>Dealer Login</h2>
                                </div>
                                <div class="container">
                                    <div class="form">
    
    
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input type="email" class="form-control" value="farzan@abcd.com" name="email" id="email" ref={c=>this.loginemail=c} placeholder="Your Email" />
                </div>
                <div class="form-group col-md-6">
                    <input type="password" class="form-control" value="12345" name="email" id="email" ref={c=>this.loginpass=c} placeholder="Your Password" />
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