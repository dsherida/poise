// import React, { Component } from "react";
// import "./login.css"
// import API from "./API"
// // import { withCookies } from 'react-cookie';


// //Creating a stateful Login component
// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//         }
//     }

//     render() {
//         return (
//             <div className="row">
//                 <form className="col s8 offset-s2 center-align">
//                     <h4 className="form-title">Log In</h4>
//                     <div className="row">
//                         <div className="input-field col s12">
//                             <input id="username" onChange={this.handleChange.bind(this)} value={this.state.username} type="text" className="validate" />
//                             <label htmlFor="username">Username</label>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="input-field col s12">
//                             <input id="password" onChange={this.handleChange.bind(this)} value={this.state.password} type="password" className="validate" />
//                             <label htmlFor="password">Password</label>
//                         </div>
//                     </div>
//                 </form>
//                 <div className="col s8 offset-s2 member center-align">
//                     Don't have an account? <span onClick={() => this.props.handleFormChange('signup')}>
//                         <a href="#" className="sign-up">Sign up here</a></span>
//                 </div>
//                 <div className="col s8 offset-s2 member right-align">
//                     <button onClick={this.formSubmit.bind(this)} className="btn waves-effect waves-light" type="submit" name="action">Submit
//                         <i className="material-icons right">send</i>
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }


// export default withCookies(Login);