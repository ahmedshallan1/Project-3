import React, { Component } from 'react'
import './home.css'
import Carousel from './carousel.js'
import axios from 'axios'

const carouselSlidesData = [
    {
      content:
        "Helping others is one of the greatest human deeds. Helping people makes you feel good about yourself. It makes you a better person and others will respect you. If you help someone in need, they feel the need to help another. Feel free to ask your question or share your story under the appropriate section on our forum.",
      author: "SpeakUp Team",
      
      
      
      
      
      
    }
  ];

class Descriptions extends Component {
    state = {
        articles: []
    }

    componentDidMount(){
        this.getDescriptions()
    }

    getDescriptions = () => {
      axios.get("/all").then(res => {
        console.log(res.data)
      }) 
    }
}   

const Home = () => (
    <div className= "main-container">
        <h3>True Stories . Real People .</h3>
        <Carousel slides={carouselSlidesData} /> 
    </div>  
)

export default Home
