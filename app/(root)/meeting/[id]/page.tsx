'use client'

import Loader from '@/components/ui/Loader';
import MeetingRoom from '@/components/ui/MeetingRoom';
import MeetingSetup from '@/components/ui/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import { Stream } from 'stream';

const Meeting = ({params}:{params:{id:string}}) => {
// const Meeting = ({params: {id}}:{params:{id:string}}) => {
  const {user, isLoaded} = useUser();
  const [isSetupComplete, setsSetupComplete] = useState(false)
  const {call,isCallLoading} = useGetCallById(params.id)
  // const {call,isCallLoading} = useGetCallById(id)


  if(!isLoaded||isCallLoading) return <Loader />

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
              {
                !isSetupComplete ? (<MeetingSetup setsSetupComplete={setsSetupComplete} />):(<MeetingRoom />)
              }
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting
