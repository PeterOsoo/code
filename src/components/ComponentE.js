// import React, { useContext } from 'react'
// import ComponentF from './ComponentF'
// import { UserContext, ChannelContext } from '../App'


// function ComponentE() {

//   const user = useContext(UserContext)
//   const channel = useContext(ChannelContext)
//   return <div> User is {user} and channel is {channel}</div>
// }

// export default ComponentE





// old method 

// import React from 'react'
// import ComponentF from './ComponentF'

// function ComponentE() {
//   return (
//     <div>
//       <ComponentF />
//     </div>
//   )
// }

// export default ComponentE




import React, {useContext} from 'react'
import { CountContext } from '../App';

function ComponentE() {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component E {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}


export default ComponentE
