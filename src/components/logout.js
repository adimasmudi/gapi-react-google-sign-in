import { GoogleLogout } from '@react-oauth/google';

const clientId=process.env.CLIENT_ID

function Logout(){
    const onSuccess = () => {
        console.log("Logout successfully!")
    }

    return (
        <div id="signOutButton">
            <GoogleLogout 
                clientId={clientId}
                buttonText="logout"
                onLogoutSuccess={onSuccess}
            />

           
        </div>
    )
}

export default Logout;