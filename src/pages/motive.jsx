import React from 'react'
import Image from "next/image";

const Motive = (props) => {
  return (
    
    <div className="bg-primary-200 mt-7 p-4 h-1/6 md:p-12 rounded-3xl md:h-max">
    <Image
          width={70}
          height={80}
          src={`/assets/${props.im}.png`}
          alt="PlaceXP"
        />
      <h2 className='md:text-2xl  text-primary-600 font-extrabold md:mb-9 '>{props.name}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis blanditiis molestias tenetur aspernatur maxime necessitatibus soluta unde rem minus minima, consectetur debitis delectus suscipit alias, libero quos molestiae autem fuga.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus aliquid tempore eum tempora veritatis repellendus iste ab reprehenderit molestias, quam error deserunt quia omnis accusantium, facilis possimus est et. </p>
    </div>
 
  )
}

export default Motive
