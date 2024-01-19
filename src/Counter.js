import React ,{useState} from'react'

function Counter() {
   const [count, setCount ] = useState(0)
   const [showCount, setShowCount ] = useState(false)
   return (
  <div>
   <button onClick={()=>setShowCount(!showCount)}>{showCount ? 'Hide show count' : 'Show count'}</button>

   {
      showCount ?

      <>
      <h2>counter show open</h2>
      <h3>Count is - {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      </>
      :null

   }
  
  
  </div>
   )
}

export default Counter