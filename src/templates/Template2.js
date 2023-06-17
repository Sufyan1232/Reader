import React , {useRef, useState} from 'react';
import {useReactToPrint} from "react-to-print"
import "./Template.css";
import  t from "../images/tdesign.jpg"
import spoon from "../images/fork.png"
import top from "../images/top.PNG";
import cat from "../images/cat2.jpeg"
import cat3 from "../images/cat3.jpeg"
// import { Print } from '@material-ui/icons';
import back from "../images/back.png"
import oval from "../images/ooo.PNG"


function Template2({name, age,  country,  passport, designation,salary, salaryw, company, comArabic, nationality, hrname, pobox, addrees, region,  date}) {


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'emp-data',
      onAfterPrint: () => alert('print success')
    })



  return (

<>

<div className='topyo'>
<a href='/' style={{pointer:"cursor"}} > <img src={back} /></a>
<button onClick={handlePrint} className='print' >  PRINT</button>
</div>
    <div ref={componentRef} style={{width: '100%', height: window.innerHeight}}>
        <div className='background'>
            
            {/* <div className='main'>
                <div className='m1'>
                <div className='triangle'> 

               <div className='tim'> <img src={food} className='timg' width="100px" /><h3 className='title1'>NEW DEWAN MIAN JEE RESTURANT LLC </h3> </div> 
                <h3 className='title'>NEW DEWAN MIAN JEE RESTURANT LLC </h3></div>
                <div className='trapezoid'></div>

               
                </div>
                
            
            </div> */}
 <div className='rheman'>
<div className='main2'>
    <img src={t} height="250px" width="400px" />
    <h2 className='title2'>{comArabic}</h2>
    <h2 className='title2'>{company}</h2>
</div>


<img src={spoon} className='spoon' width="220px" />
<p className='date'> Date: {date}</p>

<div className='font'>To,</div>
<div className='font'>Emirates NBO Bank</div>

<div className='fonts'>Salary Certificate</div>
<div className='font'>
    This is to Certify that <b> {name}</b> holding <b>{country}</b> passport No <b>{passport}</b> is working
    with our organization as <b> {designation} </b> since <b> {date} </b>. This company is paying a monthly
    salary of <b> {salary} </b>{salaryw}.
</div>
<div className='font1'>
    This confirmation has been issued upon the request of that employee and does not constitute a gurarantee on our part towrds any claim 
    whatsoever against him.

</div>
<div className='font'>Thanks & Regards</div>
<div className='font2'>HR Manger</div>
<div className='font'>{hrname}</div>

<div className='stamp'>
<div className='move22'>
<div className='movee'>
<div className='move1'> 
<h6 className='nh5'>{region}</h6>
<h5>{company}</h5>
</div></div></div>
</div>
<div className='uline'></div>
                    <div><p className='fott'>{addrees} PO Box: <br /> {pobox} 
                      Tel: {age} Email: Info@newdewanmianjeerestaurant.com<br />
                      Web:www.newdewanmianjeerestaurant.com</p></div>




</div>           








<br />
<br />
<br />



        </div>
      
    </div>

    </>
  )
}

export default Template2


// <span class="arced">
//         <span class="char1">Studenj ajkla akjakjk</span>
//         <span class="char2">T</span>
//         <span class="char2">E</span>
//         <span class="char3">V</span>
//         <span class="char4">E</span>
// </span>