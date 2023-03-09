import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props : any) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={520}
    viewBox="0 0 280 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="134" r="134" /> 
    <rect x="0" y="290" rx="8" ry="8" width="280" height="30" /> 
    <rect x="0" y="336" rx="8" ry="8" width="280" height="35" /> 
    <rect x="2" y="382" rx="8" ry="8" width="147" height="35" /> 
    <rect x="164" y="381" rx="8" ry="8" width="115" height="35" />
  </ContentLoader>
)

export default Loading