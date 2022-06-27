export const SETDATA = "SETDATA"
export const onSetDataAC = (body)=>{
  return {
    type: SETDATA,
    payLoad: body
  }
}