import './index.css'

const ProfilePage = (props) =>{
    return(
    <div className='landing-page align-center'>
        <div className='mobile-screen no-padding hide-content'>
            <header className='profile-page-header'>
                <p className='header-title profile-page-text'>Account Settings</p>
            </header>
            <section>
                <div className='profile-and-name-box'>
                    <div className='profile-pic'><img className='camera-icon' src="https://res.cloudinary.com/df9k2fdct/image/upload/f_auto,q_auto/ppuallq0qyhm5cwejxzk" alt="camera-icon" /></div>
                    <div>
                        <p className='profile-page-text profile-name'>Marry Doe</p>
                        <p className='profile-page-text profile-email'>Marry@gmail.com</p>
                    </div>
                    
                </div>
                    <p className='profile-page-text profile-page-description'>
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam 
                    </p>
            </section>
            <hr/>
        </div>
    </div>
)
} 

export default ProfilePage
