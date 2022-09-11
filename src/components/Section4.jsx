import React from 'react'
import {Global, Data, Leader, Scale, Cloud, Speed} from "../assets";

const Section4 = () => {
  return (
    <div className="bg-[#F3F4F6] lg:h-[1270px] h-[2088pxpx]">
    <h2 className='text-center'>Why organizations prefer our cards</h2>
    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sapien non in a est et turpis. Urna quisque at sit ornare consectetur ac.</p>

    <div className='flex lg:flex-row flex-col'>
        <div>
            <h3>We’ve got you covered</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod vulputate duis nam nulla massa quisque. Adipiscing purus ac velit libero commodo sapien, volutpat lacinia. Quis aliquam sed fringilla.</p>

        </div>
        
        <div>
        <div className='flex lg:flex-row flex-col'>
            <div>
                <img src={Global} alt="global" />
                <h4>Truly global</h4>
                <p>We have on-the-ground regional teams in Europe, Middle East and Africa across different time zones.</p>
            </div>
            <div>
                <img src={Cloud} alt="cloud-native" />
                <h4>Cloud-native</h4>
                <p>Superior capability across the different cloud platforms, shared or dedicated, with unmatched APIs and flexibly.</p>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col'>
            <div>  
                <img src={Scale} alt="scale" />
                <h4>Scalable at speed</h4>
                <p>With higher processing capacity, greater speed, and richer data, we’re able to exponentially scale your program without disruption in service.</p>
            </div>
            <div>
                <img src={Data} alt="data" />
                <h4>Real-time data</h4>
                <p>Easily innovate, deploy and customize products to more insightfully connect with customers, while reducing operational costs.</p>
            </div>
        </div>
        <div className='flex lg:flex-row flex-col'>
            <div>  
                <img src={Speed} alt="speed" />
                <h4>Speed to market</h4>
                <p>Unbeatable time-to-market, from first handshake to first transaction through unmatched APIs and regional experience.</p>
            </div>
            <div>  
                <img src={Leader} alt="leader" />
                <h4>Trusted by leaders</h4>
                <p>We are trusted by leaders, including leading banks, digital banks and fintechs, giving world class support to ensure you have a smooth journey.</p>
            </div>
        </div>
    </div>
  </div>
  </div>
  )
}

export default Section4