import {useState} from 'react'

const FormInput = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('file', file);
      
        try {
            alert("ahh, the file")
        //   const res = await axios.post('/api/upload', formData);
        //   console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      };
      const [file, setFile] = useState(null);

      const handleChange = (event) => {
        setFile(event.target.files[0]);
      };
      
      

  return (
    <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Submit</button>
    </form>
  )
}

export default FormInput


