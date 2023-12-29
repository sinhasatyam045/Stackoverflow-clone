import React from 'react'

const Avatar = ({children,backgrounColor,px,py,color,borderRadius,fontSize,cursor}) => {
  const style={
    backgrounColor,
    padding:`${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign:"center",
    cursor:cursor || null,
    textDecoration:"none"

  }
  return (
    <div style={style}>
      {children}

    </div>
  )
}

export default Avatar



 
