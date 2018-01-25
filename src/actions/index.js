export const selectUser=(user)=>{
  console.log(user.first)
  return{
    type:"USER_SELECTED",
    payload:user
  }
}
export const selectWeapon=(weapon)=>{
  console.log(weapon.name)
  return{
    type:"WEAPON_SELECTED",
    payload:weapon
  }
}