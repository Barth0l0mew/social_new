export const SET_DATA = "SET_DATA"
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
export const SET_PAGE_COUNT = "SET_PAGE_COUNT"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_FOLLOW = "SET_FOLLOW"
export const onSetDataAC = (body)=>{
  return {
    type: SET_DATA,
    payLoad: body
  }
}
export const onSetTotalCount = (body) =>{
  return{
    type: SET_TOTAL_COUNT,
    payLoad: body
  }
}
export const onSetPageCount = (body) =>{
  return{
    type: SET_PAGE_COUNT,
    payLoad: body
  }
}
export const onSetCurrentPage = (body) =>{
  return{
    type: SET_CURRENT_PAGE,
    payLoad: body
  }
}
export const onSetFollow = (body) =>{
  return{
    type:SET_FOLLOW,
    payLoad:body
  }
}