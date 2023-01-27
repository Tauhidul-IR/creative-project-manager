import React from 'react';
import GoogleLogin from 'react-google-login';

const IntregrationCalendar = () => {
    const responseGoogle = response => {
        console.log(response)
    }

    const responseError = error => {
        console.log(error)
    }
    return (
        <div >
            <div className="card lg:card-side bg-base-300 shadow-xl m-12">
                <figure><img src="https://www.thestreet.com/review/wp-content/uploads/2021/07/lemone-wall-calendar-thestreet.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Google Calendar Intregration</h2>
                   <GoogleLogin className='' clientId='685740730822-gcotaat4cak957p6gvgql7lijhp8nsjo.apps.googleusercontent.com' 
                   buttonText='Sign in & Authorize Calendar' 
                   onSuccess={responseGoogle}
                   onFailure={responseError}
                   cookiePolicy={'single_host_origin'}
                //    This is important things i am marking here 
                   responseType='code'
                   accessType='offline'
                   scope='openid email profile https://www.googleapis.com/auth/calendar'
                   
                   />
                    
                </div>
            </div>
        </div>
    );
};

export default IntregrationCalendar;