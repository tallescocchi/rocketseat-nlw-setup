import * as Checkbox  from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export function CheckBox() {
  return (
    <Checkbox.Root 
      className='flex items-center gap-3 group'>
      <div 
        className='
          h-8 
          w-8 
          rounded-lg 
          flex 
          items-center 
          justify-center 
          border 
          border-zinc-700 
          bg-zinc-800
          group-data-[state=checked]:bg-green-600
          group-data-[state=checked]:border-green-400
          '> 
        <Checkbox.Indicator>
          <Check size={20} className='text-white'/>
        </Checkbox.Indicator>
      </div>

      <span 
        className='
        font-semibold 
        text-xl 
        text-white 
        leading-tight
        group-data-[state=checked]:line-through
        group-data-[state=checked]:text-zinc-400
        '>
          Beber 2L de água
      </span>
    </Checkbox.Root>
)}