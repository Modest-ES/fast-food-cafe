
// Скелет карточки товара в категории

import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    className="food-item"
    speed={2}
    width={314}
    height={420}
    viewBox="0 0 314 420"
    backgroundColor="#d9fcd2"
    foregroundColor="#f0fff0"
    {...props}
  >
    <rect x="0" y="334" rx="10" ry="10" width="314" height="19" /> 
    <rect x="0" y="10" rx="15" ry="15" width="314" height="314" /> 
    <rect x="108" y="358" rx="20" ry="20" width="99" height="27" /> 
    <rect x="213" y="357" rx="20" ry="20" width="99" height="27" /> 
    <rect x="3" y="358" rx="20" ry="20" width="99" height="27" /> 
    <rect x="0" y="397" rx="10" ry="10" width="89" height="27" /> 
    <rect x="213" y="395" rx="20" ry="20" width="101" height="30" />
  </ContentLoader>
)

export default MyLoader

