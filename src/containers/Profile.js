import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { saveProfileData } from '../modules/profile/actions';
import ProfileView from '../components/ProfileView';
import { connect } from 'react-redux';
 class Profile extends Component {
  static propTypes = {
    userAvatar: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    saveProfileData: PropTypes.func.isRequired,
  };

  render() {
    const { saveProfileData, userAvatar, userEmail, userName, navigation: { navigate } }= this.props;
    return (
      <ProfileView
      saveProfileData={saveProfileData}
      userAvatar={userAvatar}
      userEmail={userEmail}
      userName={userName}
      navigate={navigate}
      />
    )
  }
}

const mapStateToProps = state => ({ 
  userAvatar: state.profileReducer.userAvatar,
  userEmail: state.profileReducer.userEmail,
  userName: state.profileReducer.userName,
});


export default connect(mapStateToProps, { saveProfileData })(Profile)