import React, {Component} from 'react';
import SigninInput from '../../components/Signin/SigninInput';
import UserService from '../../service/UserService';
import {withRouter} from 'react-router-dom'

class Signin extends Component{
  constructor(props){
    super(props);
 
  }

  handleSubmit = entity =>{
    UserService.signinUser(entity).then(resp => {
        if(resp.status == 200){
			console.log(resp)
            this.props.history.push("/todo")
        }else{
            alert(resp)
        }
    });
  }

  render(){
    return (
        <SigninInput handleSubmit={this.handleSubmit}/>
      );
    }
}

export default withRouter(Signin);
