

export default function Articles ({articles}){
  console.log("here", articles)
  return (
    <div style={{ width:"700px", margin:"auto", display:"flex", flexDirection:"column", rowGap:"30px" , cursor:"pointer"}}>
  {articles.map((article) => {
    return (
  <div style={{border:"1px solid gray", display:"flex", flexDirection:"column" , alignContent:"center", borderRadius:"15px"}}
  onClick={() => {
    window.location.href = article.url;
  }}
  >
    
   <header style={{ display:"flex", columnGap:"10px" , justifyContent:"start"}} >
   <img style={{
        margin:20,
        width: 50,
        height: 50,
        borderRadius:80
      }} src={`${article.image}`} alt="article"/>
   <h3 style= {{alignSelf:"center", fontFamily:"serif" , fontWeight:"bold" }}>{`${article.title}`}</h3>
   </header>
   <div style={{ display:"flex",flexDirection:"column" ,alignItems:"center",margin:"20px"}}>
   <p style={{alignSelf:"start" , fontStyle:"normal" , fontFamily:"serif", fontWeight:"normal" , color:"gray"}}>{`${new Date(`${article.published}`)} `} , {`${article.author}`} </p>
   <p style={{alignSelf:"start" , fontStyle:"normal" , fontFamily:"serif", fontWeight:"normal" , color:"black"}}>{`${article.description}`}</p>
   </div>
  </div>
)})}
</div>
  )
}

