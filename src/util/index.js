import { Toast } from 'native-base';

export default validate = (userAvatar, userEmail, userName, fromProfile) => {
    const  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = () => ( emailRegex.test(userEmail) );
    const valid = userAvatar && userEmail && userName && validEmail();
    const validModal = valid && !fromProfile;
    const validProfile = valid && fromProfile;


    let text = '';
    if (!userAvatar) fromProfile ? text='Add avatar': text='Add title' ;
    if( !validEmail() ) text='email not valid!';
    if (!userEmail)  text='enter your email';
    if (!userName) fromProfile ? text='enter your Name': text='enter your comment';
    
    if (!validProfile && fromProfile || !validModal && !fromProfile){
        Toast.show({text, buttonText: 'Okay', type: 'warning' });
    };

 return fromProfile ? validProfile : validModal;
}