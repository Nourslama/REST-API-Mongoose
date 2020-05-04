import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getcontacts,deletecontact}from '../actions/action'
import AddContact from './addContact'



export class cards extends Component {
    componentDidMount(){
        this.props.getcontacts()
    }
    render() {
        
        return (
            <div className="name">
              {this.props.contactList.map((el,i)=>(
                 
                    <div class="container">
      <div class="our-team">
          
        <div class="picture">{el.name[0].toUpperCase()} </div>  
        <div class="team-content">
          <h3 class="name">{el.name}</h3>
          <h4 class="title">{el.mail}</h4>
        <h4 class="title">{el.tel}</h4>
        </div>
        <div class="social">

        <button onClick={()=>window.confirm(`Are you sure you wish to delete ${el.name}?`)&&this.props.deletecontact(el._id)}>DELETE</button>
    

   <AddContact contacts={el}/></div>
    </div>
  
  
                  </div>
              ))}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        contactList:state.contact
    }
}
export default connect(mapStateToProps,{getcontacts,deletecontact})(cards)