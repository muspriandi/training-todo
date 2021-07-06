import React, {Component} from 'react';
import SignupInput from '../../components/Signup/SignupInput';
import UserService from '../../service/UserService';
import {withRouter} from 'react-router-dom'

class Signup extends Component{
  constructor(props){
    super(props);
 
  }

  handleSubmit = entity =>{
    UserService.signupUser(entity).then(resp => {
        if(resp.status == 201){
            this.props.history.push("/login")
        }else{
            alert(resp)
        }
    });
  }

  render(){
    return (
        <SignupInput handleSubmit={this.handleSubmit}/>
      );
    }
}

export default withRouter(Signup);
