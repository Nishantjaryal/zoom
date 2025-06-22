'use client'
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './button'

const MeetingSetup = ({setsSetupComplete}:{
    setsSetupComplete: (value:boolean)=> void
}) => {

  const [isMicCamToggledOn,setMicCamToggledOn] = useState(false)

  const call = useCall();
  useEffect(()=>{

    if(isMicCamToggledOn){
        call?.camera.disable();
        call?.microphone.disable();
    }
    else{

        call?.camera.enable();
        call?.microphone.enable();
    }

  },[isMicCamToggledOn, call?.camera,call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-5 text-white'>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview className='w-[60%] min-w-[275px] rounded-3xl overflow-hidden text-center'/>

      <div className='flex h-16 items-center justify-center gap-3'>
        <label className='flex items-center justify-center gap-2 font-medium'>
            <input type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e)=>{setMicCamToggledOn(e.target.checked)}}/>
            Join with mic and camera off
        </label>

        <DeviceSettings />
      </div>

      <Button className='rounded-md bg-green-500 px-4 py-2.5'
      onClick={()=>{
        call?.join()

        setsSetupComplete(true)
      }}>
        Join Meeting
      </Button>
    </div>
  )
}

export default MeetingSetup
