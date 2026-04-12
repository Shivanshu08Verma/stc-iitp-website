import React from 'react'
interface CardContent {
    title:string;
    description:string;
}
const Card = ({title,description}:CardContent) => {
  return (
    <div 
      className="flex-1 rounded-[20px] p-8 md:p-10 flex flex-col gap-4 text-center transition-transform hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-white/15 to-[#0a0ba4]/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"
    >

      <h3 className="font-bold text-white uppercase text-xl md:text-2xl font-[family-name:var(--font-manrope)] leading-[100%]">
        {title}
      </h3>
      
      <p className="text-gray-300 text-sm md:text-base leading-relaxed font-[family-name:var(--font-roboto)]">
        {description}
      </p>
    </div>
  )
}

export default Card;