 import React from 'react'

class AllShops extends React.Component{


// renderShops(){
//     this.props.stores.map((obj,index)=>{return(
//         <div key={index}>
//         <h1   className='Names' onClick={()=>this.props.selectShop(obj)}>{obj.name}</h1>
//         {/* <img className={obj.type}/> */}
//         <h1 className='address'>address: {obj.address} </h1>
//                 </div>
//     )})
// }

render(){
    return(
        <div>
{    this.props.stores.map((obj,index)=>{return(
        <div className='allShops'key={index} onClick={()=>this.props.selectShop(obj)}>
        <h1   className='Names'>{obj.name}</h1>
        <img className={obj.type}/>
        <h1 className='address'>address: {obj.address} </h1>
                </div>
    )})}






        </div>
    )
   
    }
}


export default AllShops