import React, { Component } from 'react'
import Modal from "react-modal";
import { connect } from 'react-redux';
import {addcontact,editcontact}from "../actions/action"
Modal.setAppElement("#root");


class AddModal extends Component {
  
    
  state = {
      modalIsOpen: false,

        name: "",
        tel: "",
        mail: "",
    

    };
   
    componentDidMount() {
      this.props.contacts &&
        this.setState({
          name: this.props.contacts.name,
          mail: this.props.contacts.mail,
          tel: this.props.contacts.tel,
          id: this.props.contacts._id,
        });
    }


addEditContact=()=>{
  if (Object.values(this.state).indexOf("") === -1) {
    this.props.contacts?
    this.props.editcontact(this.props.contacts._id,{
        name:this.state.name,
        email:this.state.mail,
        tel:this.state.tel
    }):
    
    this.AddNewContact()
  
}else alert("Wrong : One or more Inputs are empty !")
}

AddNewContact=()=>{
    this.props.addcontact(this.state);
  this.setState({
      name:"",
      mail:"",
      tel:""
  })
}
    openModal = () => this.setState({ modalIsOpen: true });
    closeModal = () => this.setState({ modalIsOpen: false });
   



    handleAdd = e =>
      this.setState({
        [e.target.name]: e.target.value 
    });
    
   
    render() {
 
      return (
        <div>
          <button className="addbut"  onClick={this.openModal}>{this.props.contacts?  "Update": "Add New Contact" }</button>
          <Modal
            className="add-modal"
            isOpen={this.state.modalIsOpen}
          >

            
            <h2>{this.props.contacts?  "Edit Contact": "Add New Contact" }</h2>
              <label>Name</label>
              <input
               onChange={this.handleAdd} 
               type="text"
                name="name" 
                value={this.state.name}
                />
              <label>Mail</label>
              <input
                onChange={this.handleAdd}
                type="email"
                name="mail"
                value={this.state.mail}
              />
              <label>Phone</label>
              <input 
              onChange={this.handleAdd} 
              type="number"
               name="tel" 
               value={this.state.tel} />
              <div className="form-btn-container">
                <button className="btn btn-modal" onClick={()=>{this.addEditContact();this.closeModal()}}>{this.props.contacts?  "Update": "Add" }</button>
                <button className="btn btn-modal" onClick={this.closeModal}>
                  Close
                </button>
              </div>
  
          </Modal>
        </div>
      );
    }
  }

  export default connect(null,{addcontact,editcontact})(AddModal);
