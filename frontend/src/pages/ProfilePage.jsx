import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const ProfilePage = () => {
    const {authUser} = useAuthStore()

  return (
    <div>
      profile page
    </div>
  )
}

export default ProfilePage
