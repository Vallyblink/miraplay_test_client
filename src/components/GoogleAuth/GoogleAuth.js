import { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { setCredentials } from 'redux/authSlice';
import { useLoginGoogleUserMutation } from 'services/api_auth/api_auth';

const src = 'https://accounts.google.com/gsi/client'
const loadScript = (src) =>
new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.id = "script"
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.head.appendChild(script)
})

const GoogleAuth = () => {
    const [LoginGoogle] = useLoginGoogleUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate()


    useEffect(() => {

        const id = "691844797968-3g9ksmtk5vnkscj0pogt8plg4a382gdu.apps.googleusercontent.com"

        loadScript(src)
            .then(() => {
                if (window.google && window.google.accounts && window.google.accounts.id) {
                    window.google.accounts.id.initialize({ 
                        client_id: id, 
                        callback: handleCredentialResponse,
                    })
                    window.google.accounts.id.renderButton( 
                        document.getElementById("signInDiv"),
                        { theme: 'outline', size: 'large', locale: "en", width: 344, shape: "pill" }
                    )
                }
            })
            .catch(console.error)
        })

    
    async function handleCredentialResponse(response) {
   
        const { email, name } = jwt_decode(response.credential);
    
        const googleResponse = await LoginGoogle({ email, name });
    
        if (googleResponse.data && googleResponse.data.token) {
            dispatch(setCredentials(googleResponse.data));
            navigate('/home');
        }
    }

    return (

            <div id="signInDiv"></div> 
    )
}

export default GoogleAuth;