import React from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            posts :[]
            
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState({
                posts : response.data.slice(0,10)         
                         })
             })
        }
    render(){
        const {posts} = this.state;
        const postList = posts.map((post)=>{
            return(<div key = {post.id}>
                    <div className="card ">
                     <img src={Pokeball} alt="pokeball"/>
                        <div className="card-content black-text">
                            <Link to ={'/'+ post.id}>
                            <span className="card-title purple-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    
            </div>)
        })
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                    {postList}
            </div>
        )
    }
}

export default Home ;