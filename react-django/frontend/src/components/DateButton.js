import { useState } from 'react'


const DateButton = ({timeTag}) => {
    const c1 = 'rgb(78, 104, 151)'
    const c2 = 'rgb(130, 200, 150)'

    const [colorClass, setColorClass] = useState('button-color-1')
    const handleClick = () => {
        setColorClass(colorClass === 'button-color-1'? 'button-color-2': 'button-color-1')
    }

  return (
    <button className ={colorClass} onClick={handleClick}>
        {timeTag}
    </button>
  )
}

export default DateButton