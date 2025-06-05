import {Link} from 'react-router-dom'
import './index.css'

const LandingPage = () => (
    <div className='landing-page align-center'>
        <div className='mobile-screen flex-bottom'>
            <section className='landing-page-container'>
                <p className='landing-page-title'>Welcome to PopX</p>
                <p className='landing-page-description'>Lorem ipsum dolor sit amet,<br/>
                 consectetur adipiscing elit,</p>
                 <Link to="/create-account"><button className='btn create-account-btn'>Create Account</button></Link>
                
                <br/>
                <Link to="/login-page"><button className='btn navigate-btn'>Already Registered? Login</button></Link>
                
            </section>
        </div>
    </div>
)

export default LandingPage