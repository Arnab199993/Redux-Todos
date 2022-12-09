import React from 'react'
import { Image } from 'antd';


const Images = (props) => {
  return (
    <Image
    width={200}
    src={props.url}
  />
  )
}

export default Images