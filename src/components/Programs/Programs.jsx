import React from 'react';
import"./Programs.css";
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = ()=> {
  return (
    <div className='programs' id="Programs">
        {/*Header*/}

        <div className='Programs-header'>
            <span className='stroke-text'>Explore Our</span>
            <span> Programs</span>
            <span className='stroke-text'>To Shape You </span>
        </div>

        <div className='Programs-catagories'>
            {programsData.map((program) =>(
                  
                 
                 < div className='catagory'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>

                    <div className='join-now'><span>join now</span><img src={RightArrow} alt='' />
                    </div>
        </div>
            ))}
            </div>
</div>
  )
            }
export default Programs;



