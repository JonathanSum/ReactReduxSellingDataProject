export default function (state = null, action) {
  switch (action.type) {
    case "Weapon_SELECTED":
      return action.payload;
      break;

  }
  return state
}