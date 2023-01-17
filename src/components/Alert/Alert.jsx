import './Alert.css';
import classNames from 'classnames';

export const Alert = ({error, title, message}) => {
    const classes = classNames({
        'alert--success': !error,
        'alert--error': error
    });

    return (
        <div className={`alert ${classes}`}>
            <h3 className='alert__icon'>*</h3>
            <div className='alert__info'>
                <h3 className='alert__info__title'>{title}</h3>
                <p className='alert__info__description'>{message}</p>
            </div>
        </div>
    )
}