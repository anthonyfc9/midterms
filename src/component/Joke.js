import React from 'react'
import axios from './../../node_modules/axios'
class Joke extends React.Component{
        constructor(){
            super();
            this.state={
                funny:null
            }
        }

        componentDidMount(){
            axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
            //.then is what you do with the data you get. the data you called is the response
            .then(response=>{
              this.changeState(response.data)
            })
            .catch(error=>console.log(error))
          }
          //Step tresDos declare this function
          changeState(data){
            this.setState({funny:data})
          }

    render(){
        if(!this.state.funny){return <p>Thinking of a joke{console.log(this.state.funny)}</p>}
            else{return <p key={this.state.funny.id}>{this.state.funny[0].setup}<br/>{this.state.funny[0].punchline}</p>}
    }
}

export default Joke;