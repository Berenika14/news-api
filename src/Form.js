import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Articles from "./Articles"
function Form(){
  const [query , setQuery] = useState("")
  let [articles , setArticles] = useState([])


    function handleChange(e){
      setQuery(e.target.value)
    }


    function handleSubmit(){
      var url = `https://api.currentsapi.services/v1/search?keywords=${query}&language=en&apiKey=9lqjlUKz7VYKHmxKojwR30DyqTAJSafeY2e43qcb3CO8asEN`;
var req = new Request(url);
fetch(req)
  .then(function(response) {
    const result = response.json()
   result.then((data)=>{
    setArticles(data.news)
   })
  })
 }

   



  return (
    <div style={{padding:"20px",  display:"flex", flexDirection:"column", rowGap:"20px"}}>
    <form style={{width:"700px" , display:"flex" , margin:"auto" , columnGap:"10px"}}>
    <TextField 
     fullWidth id="outlined-basic" 
      label="Search for news"
      variant="outlined"
      onChange ={handleChange}
      >
    </TextField>
    <Button onClick={handleSubmit} variant="outlined">Search</Button>
    </form>
    <hr></hr>
    <Articles articles= {articles} />
     </div>

  )
}

export default Form