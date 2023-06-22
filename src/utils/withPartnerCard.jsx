import React from 'react'

export const withPartnerCard = (OrgiginalComponent) => {
  return (props)=>{
   
    return(
      <OrgiginalComponent lead={props.lead} {...props}/>
    )
  }
}
