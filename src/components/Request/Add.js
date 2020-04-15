import React from "react"
import Infomation from "./Infomation";


const API_KEY ="5940ad17b07d4f638e7e78de596b5c71";


class Add  extends React.Component{

  gettingRequest = async (e)=>{
     e.preventDefault();
     const api_url = await
       fetch(`https://newsapi.org/v2/sources?apiKey=${API_KEY}&message`);
     const data = await api_url.json();
    console.log(data);
  };


  render(){

    return(
      <div>
        <Infomation getMethod={this.gettingRequest}/>
      </div>
    )
  }
}

export default Add;