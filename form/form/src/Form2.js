import React,{useState} from 'react'

const Form2 = () => {
  const [formdata, setFormData] = useState({
    name : '',
    email: ''
  });
    const handlechange =(e)=> {
      const {name,value} = e.target; 
      setFormData({...formdata, [name]:value})
    }
    
    return (
    <div>
        <input type='text' value={formdata.name} onChange = {handlechange} name='name'></input>
        <input type='text' value={formdata.email} onChange={handlechange} name='email'></input>

        <button>My button</button>
    </div>
  )
}

export default Form2