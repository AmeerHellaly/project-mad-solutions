import React from 'react'
import ProfileComponent from '../../components/profileComponent/ProfileComponent'
const ProfilePage = ({setMyMode}) => {
  return (
    <div>
      <ProfileComponent setMyMode={setMyMode}/>
    </div>
  )
}

export default ProfilePage
