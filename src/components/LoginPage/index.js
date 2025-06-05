import {Component} from 'react'
import './index.css'
import withRouter from '../SignUpPage/withRouter'

class LoginPage extends Component{
    state = {email : '' , password : '',error : ''}

    onUpdateEmail = event => this.setState({email : event.target.value.toLowerCase()})

    onUpdatePassword = event => this.setState({password : event.target.value})

    onLogin = () => {
        const {email , password } = this.state 
        if(email === '' || password === ''){
            this.setState({error : "Must fill Required inputs"})
        }else{
            this.setState({error : ''})
            this.props.navigate("/profile")
        }
    }
    render(){
        const {error} = this.state
        return(
    <div className='landing-page align-center'>
        <div className='mobile-screen'>
            <section className='landing-page-container'>
                <p className='login-page-title text'>Signin to your PopX account</p>
                <p className='text login-page-description'>Lorem ipsum dolor sit amet,<br/>
                 consectetur adipiscing elit,</p>
                 <div className='input-wrapper'>
                    <label className='input-label' htmlFor='email'>Email Address</label>
                    <input onChange={this.onUpdateEmail} placeholder='Enter email address' id="email" className='input-box' type="email" />
                 </div>
                 <div className='input-wrapper'>
                    <label className='input-label' htmlFor='password'>Password</label>
                    <input onChange={this.onUpdatePassword} placeholder='Enter password' id="password" className='input-box' type="password" />
                 </div>
                <button onClick={this.onLogin} className='btn create-account-btn'>Login</button>
                {error !== '' && <p className='error-msg'>{error}</p>}
            </section>
        </div>
    </div>
)
    }
}

export default withRouter(LoginPage)