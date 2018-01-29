export default function (state = null, action) {
  switch (action.type) {
    case "MONTH_SELECTED":
      return action.payload;
      break;
    case "WEEK_SELECTED":
      return action.payload;
      break;
    case "DAY_SELECTED":
      return action.payload;
      break;
  }
  return state
}