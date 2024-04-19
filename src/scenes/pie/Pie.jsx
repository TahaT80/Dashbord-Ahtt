import React from 'react'
import PieChart from '../../components/PieChart'
import Header from '../../components/Header'

const Pie = () => {
  return (
    <section className='h-[75vh]'>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <PieChart/>
    </section>
  )
}

export default Pie