import React,{useState} from "react";


function App(){


const [url,setUrl]=useState("");

const [short,setShort]=useState("");



function shorten(){


fetch(
"http://localhost:3000/shorten",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
url:url
})

})

.then(res=>res.json())

.then(data=>{

setShort(data.short)

})

}



return(

<div>


<h1>
🔗 SmartURL
</h1>


<input

onChange={
e=>setUrl(e.target.value)
}

/>


<button onClick={shorten}>

Shorten

</button>



<h3>{short}</h3>


</div>

)

}


export default App;