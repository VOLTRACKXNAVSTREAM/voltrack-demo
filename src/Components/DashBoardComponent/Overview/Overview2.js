import React from 'react'
import OverviewCard2 from '../../Cards/OverviewCard2';
import LineGraph from '../../Graph/LineGraph/LineGraph';
import MainPageCards from '../../Cards/MainPageCards';
import Alerts from "../Alerts/Alerts";
import Indicators from "../Indicators/Indicators";
import DoughnutGraph from '../../Graph/DoughnutGraph/DoughnutGraph';

function Overview2() {
    let value = 0.42;
    return (
        <div className='w-full min-h-screen p-5 flex flex-col gap-5'>

            <div className='w-full h-1/4 flex justify-between gap-5 flex-wrap'>
                <OverviewCard2 name={"voltage"} symbol={'V'} percentage={0.52} data={25437 + " V"} />
                <OverviewCard2 name={"current"} symbol={'I'} percentage={0.52} data={2547 + " A"} />
                <OverviewCard2 name={"SOC"} symbol={'C'} percentage={0.52} data={25427 + " A"} />
                <OverviewCard2 name={"SOH"} symbol={'H'} percentage={0.52} data={2117 + " T"} />
            </div>

            <div className='w-full h-1/4 flex flex-wrap gap-5 '>
                <div className="p-5 min-w-[50%] lg:w-[70%] sm:w-full md:w-full flex-auto bg-white">
                    <div className='flex justify-between'>
                        <span className='h-10  text-[#939BA2] font-semibold leading-tight'>title</span>
                        <span className='h-10  text-[#939BA2] font-semibold leading-tight'>value</span>
                    </div>
                    <div className='h-[80%]'><LineGraph name={"title"} /></div>
                </div>
                <div className='p-5 min-w-1/4 lg:w-1/4 sm:w-full md:w-full flex-auto bg-white '>
                    <DoughnutGraph arr={[1, 10, 12, 14, 16, 18, 20, 21, 25, 29, 30, 45]} />
                </div>
            </div>

            <div className=" w-full h-1/4 flex flex-wrap gap-5">
                <Alerts />



                <Indicators />
            </div>
        </div>
    )
}

export default Overview2
