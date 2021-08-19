/* eslint-disable no-octal-escape */
import React from "react";
import imgUrl from "../../Static/imgUrl";
import ImgRender from "./ImageRender";
import { Carousel } from '3d-react-carousal';
const ImageCorosal=()=>{
  
    var images = imgUrl.map((key, index) => {
        return <><ImgRender key={index} adress={key} id={index} /> </>
    });
    return<>
       
        <Carousel slides={images} autoplay={false}   />
        
    </>
}
export default ImageCorosal;