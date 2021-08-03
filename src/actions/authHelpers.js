export const getGoogleUser = (dataUser) => {
  const { additionalUserInfo, user } = dataUser

  const { email, name, picture: userImg } = additionalUserInfo.profile
  const { uid } = user

  const userInformation = {
    uid,
    name,
    email,
    userImg
  }

  return userInformation
}
