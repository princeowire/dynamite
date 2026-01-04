import React from 'react'

const SubHeader = ({text}) => {
  return (
<div className="group text-center">
  <h3 className="text-4xl tracking-wider font-bold">{text}</h3>

  <hr
    className="
      w-24
      mx-auto
      h-0.5
      mt-2
      bg-white
      transition-all
      duration-300
      ease-out
      group-hover:w-36
      group-hover:bg-[#8c7e4f]
    "
  />
</div>
  )
}

export default SubHeader
