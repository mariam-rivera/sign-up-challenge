import { useState } from 'react';
import { Alert } from '../Alert/Alert';
import { EmailField } from '../EmailField/EmailField';
import './SignUp.css';

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [titleAlert, setTitleAlert] = useState('');
    const [messageAlert, setMessageAlert] = useState('');
    const [showForm, setShowForm] = useState(true);

    return(
        <div className='home'>
            <h1 className='home__title'>Sign up for the <br/> latest updates</h1>
            {
                showForm ?
                <EmailField {...{
                    email,
                    setEmail,
                    setError,
                    setTitleAlert,
                    setMessageAlert,
                    setShowForm
                }}/> 
                : <Alert error={error} title={titleAlert} message={messageAlert}/>
            }

            {
                error && <Alert error={error} title={titleAlert} message={messageAlert}/>
            }
        </div>
    )
}