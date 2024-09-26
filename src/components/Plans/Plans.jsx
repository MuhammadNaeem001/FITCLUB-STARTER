import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whitetick from '../../assets/whiteTick.png'

const Plans =() => {
  return ( <div className='Plans-container' id='plans'>
    <div className='blur blur-plans-1'></div>
    <div className='blur blur-plans-2'></div>
      <div className='Programs-header'style={{gap:'2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>

      {/*plans*/}

      <div className='plans'>
        {plansData.map ((plan,i)=>(
          <div className='Plan' key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className='Features'>
              {plan.features.map((feature,i)=>(
                <div className='Feature' key={i}>
                  <img src={whitetick}alt=''/>
                  <span key={1}>{feature}</span>
                </div>
              ))}

              <div>
                <span>see more benifits -></span>
              </div>
              <button className="btn">join now</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
