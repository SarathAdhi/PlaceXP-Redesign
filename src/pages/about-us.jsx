import React from 'react'
import PageLayout from "../common/layout/PageLayout";
import Motive from './motive';

const Aboutus = () => {
  return (
    <PageLayout>
      <div>
        <div className='text-center text-4xl text-primary-900 font-bold'>About us</div>

        <div className='md:flex text-center md:space-x-8 md:mt-20 ' >
        <Motive
          name="OUR MOTIVE"
          im="Motive"
        
        />
        <Motive
          name="ABOUT PLACE XP"
          im="Group"
        />
        <Motive
          name="UPCOMING PROGRAM"
          im="graph"
        />
         </div>

</div>
    </PageLayout>
    )
}

export default Aboutus
