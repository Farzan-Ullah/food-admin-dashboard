import React from 'react';
import {Redirect} from 'react-router-dom';
import {CATEGORY_LIST,PRODUCT_SEARCH,DEALER_PASS_CHANGE } from '../serverUrls'

export default class DealerHomeComponent extends React.Component {
     constructor(props) 
    {
        super(props)
        this.state = {
            dealerName : localStorage.getItem('dealername'),
            category : [],
            product : []
        }
        this.loadCategory()
       
    }
    loadCategory = ()=>{
        fetch(CATEGORY_LIST).then(response=>response.json()).then(data=>{
            this.setState({category:data})
            console.log(data)
        })
    }

    search = (event) =>{
    var cid =  event.target.getAttribute('data-cid');
        //console.log(cid)
        
        fetch(PRODUCT_SEARCH,{
           headers:{
            'Content-Type':'application/json'
          },
           method:'POST',
           body: JSON.stringify({cid:cid})
           }).then(response=>response.json()).then(data=>
           {
              this.setState({product:data})
                   
            });
    }

    render() {
       
        return <>     
         
          
                <main id="main">
                   <h1>Welcome User</h1>
                       
                  
                  
                     
                </main>

        </>
    }
}