//data[0]=Bracelete. Second is Fitted Cap. The next one is Hoddie.
export const selectDataDay = (data) => {
  const list = [data[0]['dataToday'], data[1]['dataToday'], data[2]['dataToday'],data[0]['time']
  ]
  // console.log("this Today !??:D ", list)
  return {type: "DAY_SELECTED", payload: list}
}
export const selectDataWeek = (data) => {
const list = [data[1]['dataWeek'], data[1]['dataWeek'], data[2]['dataWeek'],data[1]['week']
  ]
  // console.log("this Week ", list)
  return {type: "WEEK_SELECTED", payload: list}
}
export const selectDataMonth = (data) => {
const list = [data[0]['dataMonth'], data[1]['dataMonth'], data[2]['dataMonth'], data[0]['month']
    ]
  // console.log("this Month ", list)
  return {
    type: "MONTH_SELECTED",
    payload: list
  }
}