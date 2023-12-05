import React from 'react'

const Form = (props) => {
    const [newTab , setNewTab] = useState('')
    const submiHandler=(e)=>{
        e.preventDefault()
        props.add(newTab)
        setNewTab('')
    }

  return (
    <Fieldset>
        
    </Fieldset>
  )
}

export default Form