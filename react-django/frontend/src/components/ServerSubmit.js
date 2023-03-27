import React, {useState} from 'react'



const ServerSubmit = () => {
const [currentInput, setInput] = useState('Jellied Beans')
const [urlPointsTo, setUrlPointsTo] = useState('None Yet')

const handleSubmit = (e) => {
    e.preventDefault()
    setUrlPointsTo(currentInput)

}

const handleIt = (e) => {
    setInput(e.target.value)
}

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <input type = 'text' onChange={handleIt} defaultValue = 'Jellied Beans'/>
            <h2>{currentInput}</h2>
            <button classname="btn" type= 'submit'>Go to URL</button>
            <h3>You are going to: {urlPointsTo}</h3>
        </label>

    </form>

  )
}

export default ServerSubmit