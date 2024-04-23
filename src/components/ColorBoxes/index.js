import React from 'react'
import './index.css'

const ColorBoxes = ({title,url,thumbnailUrl}) => {
  
    return(
        <div>
            
              
            
                        <div className="profile-card">
                        <img className="image-size" src={thumbnailUrl} alt="some thing"/>
                       <h1 className="heading">{title}</h1>
                       <a href={url} className="button">Details</a>
                       </div>
                    
                
                

           

        </div>
    )

}
export default ColorBoxes;