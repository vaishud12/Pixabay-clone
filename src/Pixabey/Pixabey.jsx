import {useEffect, useState} from "react"


const Pixabey= () => {
    const[data,setData]=useState([])
    const[search, setSearch]=useState("")
    
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=41082987-fb212ac70b502d0348b89a678&q=${search}&image_type=photo&pretty=true`)
        .then((res)=>res.json())
        .then(d=>setData(d.hits))
    })
  return (
    <section>
        <input className="border-2 border-black" type="search" placeholder="search Image" onChange={(e)=>setSearch(e.target.value)}></input>
      <div className="api">
        
      {
        data.map((x)=>{
          return(
            <div key={x.id}>
              <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}></img>
            </div>
          )
             
        })
      }
    </div>
    
    </section>
    
  )
}

export default Pixabey