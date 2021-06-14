//DEPENDENCIES
import React from "react";
  //components
import { MDBMask, MDBView, } from 'mdbreact';

  //images
import mountainPassFade from "../../images/stock-free-images/guillaume-briard/mountain-pass-fade.jpg";

//COMPONENT
const BgImage = (props) => {
  return (
    <div>
      {/* Background image */}
      <MDBView src={mountainPassFade}>
          <MDBMask className='rgba-black-light' />
          {props.children}
      </MDBView>
      {/* <p>mountain-pass <span>Photo by <a href=
      "https://unsplash.com/@feelalivefilms?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Guillaume Briard
      </a> on <a href=
      "https://unsplash.com/s/photos/mountain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash
      </a></span><p> */}
    </div>
  );
}
    
export default BgImage;