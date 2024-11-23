import React,{useState} from 'react'

function Form() {
    const [description,setDescription]=useState("")
    const [startTime, setStartTime]=useState("")
    const [endTime, setEndTime]=useState("")
    const [category,setCategory]=useState("")
    const [date, setDate]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({
            description,
            date,
            startTime,
            endTime,
            category
          });
      
          // Clear form fields (optional)
          setDescription("");
          setDate("")
          setStartTime("");
          setEndTime("");
          setCategory("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input type="text" value={description} onChange={(e)=>{
            setDescription(e.target.value)
        }}/>
        <label htmlFor="date">Date</label>
        <input type="text"value={date} onChange={(e)=>{
            setDate(e.target.value)
        }} />
        <label htmlFor="time">Start Time</label>
        <input type="time" value={startTime} onChange={(e)=>{
            setStartTime(e.target.value)
        }} />
        <label htmlFor="time">End Time</label>
        <input type="time" value={endTime} onChange={(e)=>{
            setEndTime(e.target.value)
        }} />
        <label htmlFor="category">Category</label>
        <select name="" value={category}onChange={(e) => {
    setCategory(e.target.value);
  }}>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
        </select>
        <button type='submit'>ADD TO-DO</button>
        </form>
    </div>
  )
}

export default Form