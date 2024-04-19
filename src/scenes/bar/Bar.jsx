import React from 'react'
import BarChart from '../../components/BarChatr'
import Header from '../../components/Header'

const Bar = () => {
  return (
    <div>
     <Header title="Bar Chart" subtitle="Simple Bar Chart" />

      <div className='h-[75vh]'>
      <BarChart/>
      </div>
    </div>
  )
}

export default Bar