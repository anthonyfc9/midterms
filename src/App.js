import React from 'react';
import './App.css';
import data from './data/data.json'
import AllShops from './component/AllShops'
import Modal from './component/Modal'
import Joke from './component/Joke'
import Header from './component/Header'
class App extends React.Component{
    constructor(){
      super();
      this.state={
        myStores:data,
        current:null,
      }
    }

// {/* <Modal info={oj} key={index +1000}/> */}

selectShop(obj){
  this.setState({current:obj})
};

disappear(){
  this.setState({current:null})
}



  render(){
      return (

    <div className="App">
    <Header/>
<Modal spot={this.state.current} beGone={this.disappear.bind(this)}/>
<AllShops selectShop={this.selectShop.bind(this)
}
  stores={this.state.myStores}
/>
{/* <p>heres a joke!</p>
<Joke/> */}
    </div>
  );}

}

export default App;
