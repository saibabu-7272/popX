import { Component } from 'react'
import './index.css'
import withRouter from './withRouter'

class SignUpPage extends Component{
   state = {fullName : "", phoneNumber : "", emailAddress : "", password : "", companyName : "", isAgency : 'yes',errorMsg : ''}

   onUpdateName = event => this.setState({fullName : event.target.value})

   onUpdatePhoneNumber = event => this.setState({phoneNumber : event.target.value})

   onUpdateEmailAdress = event => this.setState({emailAddress : event.target.value.toLowerCase()})

   onUpdatePassword = event => this.setState({password : event.target.value})

   onUpdateCompanyName = event => this.setState({companyName : event.target.value})

   onUpdateAgencyStatus = event => this.setState({isAgency : event.target.value})

   onCreateAccount = () => {
      const {users, updateUsers} = this.props
      const {fullName,phoneNumber,emailAddress,password,companyName,isAgency} = this.state
      const isUserExist = users.find(each => each.emailAddress === emailAddress)
      if(fullName === "" || phoneNumber === "" || emailAddress === "" || password === ""){
         this.setState({errorMsg : "Must fill Required Inputs"})
      }else if(!isUserExist){
         this.setState({errorMsg : ''})
         const newUserDetails = {
            fullName,
            phoneNumber,
            emailAddress,
            password,
            companyName,
            isAgency
         }
         updateUsers(newUserDetails)
         this.props.navigate("/profile")
      }else{
         this.setState({errorMsg : 'User with this email already exists'})

      }
   }

   render(){
      const {errorMsg} = this.state
      return(
         (
         <div className='landing-page align-center'>
            <div className='mobile-screen col-space-between padding'>
                  <section className='landing-page-container no-padding'>
                     <p className='login-page-title'>Create your PopX account</p>
                     <div className='input-wrapper'>
                        <label className='input-label' htmlFor='fullName'>Full Name<span className='required-icon'>*</span></label>
                        <input onChange={this.onUpdateName} placeholder='Enter your name' id="fullName" className='input-box' type="text" />
                     </div>
                     <div className='input-wrapper'>
                        <label className='input-label' htmlFor='phoneNumber'>Phone Number<span className='required-icon'>*</span></label>
                        <input onChange={this.onUpdatePhoneNumber} placeholder='Enter phone number' id="phoneNumber" className='input-box' type="text" />
                     </div>
                     <div className='input-wrapper'>
                        <label className='input-label' htmlFor='password'>Email Address<span className='required-icon'>*</span></label>
                        <input onChange={this.onUpdateEmailAdress} placeholder='Enter email address' id="password" className='input-box' type="text" />
                     </div>
                     <div className='input-wrapper'>
                        <label className='input-label' htmlFor='password'>Password<span className='required-icon'>*</span></label>
                        <input onChange={this.onUpdatePassword} placeholder='Enter password' id="password" className='input-box' type="password" />
                     </div>
                     <div className='input-wrapper'>
                        <label className='input-label' htmlFor='companyName'>Company Name</label>
                        <input onChange={this.onUpdateCompanyName} placeholder='Enter company name' id="companyName" className='input-box' type="text" />
                     </div>
                     <p>Are you an Agency?<span className='required-icon'>*</span></p>
                     <input onClick={this.onUpdateAgencyStatus} value="yes" checked className='radio-btn' id="yes" type='radio' name="agency" /><label htmlFor='yes'>Yes</label>
                     <input onClick={this.onUpdateAgencyStatus} value="no" id="no" type='radio' name="agency" /><label htmlFor='no'>No</label>
                  </section>
                  <div>
                     <button onClick={this.onCreateAccount} className='btn create-account-btn '>Create Account</button>
                     {errorMsg !== '' && <p className='error-msg'>{errorMsg}</p>}
                  </div>

            </div>
         </div>
   )
      )

   }
}
 

export default withRouter(SignUpPage)