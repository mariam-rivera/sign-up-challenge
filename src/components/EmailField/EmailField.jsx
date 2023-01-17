import './EmailField.css';
import { isEmailValid } from '../../utils/email-validation';

export const EmailField = ({email, setEmail, setError, setTitleAlert, setMessageAlert, setShowForm}) => {
    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    }

    const handleEmail = (event) => {
        event.preventDefault();
        if(isEmailValid(email)) {
            setError(false)
            setTitleAlert('Yay! Thank you');
            setMessageAlert('We have sent a confirmation link to your inbox');
            setShowForm(false);

        } else {
            setError(true);
            setTitleAlert('Please use a valid email');
            setMessageAlert('Like: person@inbox.com');
        }
    }
    
    return(
        <div className='email'>
        <form  className='email__form'>
        <label className='email__name'>Email Address</label>
            <div>
                <input
                    className='email__field'
                    type='text'
                    name='email'
                    placeholder='person@inbox.com'
                    value={email}
                    onChange={handleEmailChange}
                />
                <button onClick={handleEmail} className='email__button'>Send</button>
            </div>
        </form>
        </div>
    )
}