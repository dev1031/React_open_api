import React from 'react';
import axios from 'axios';

class Post extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            post : null
        }
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        .then(response=>{
            this.setState({
                post : response.data
            })
        })
    }
    render(){
        const post = this.state.post?(
            <div className = "post">
                <h4 className="center card-title purple-text">
                    {this.state.post.title}
                </h4>
                <h5 className="card-title black-text">{this.state.post.body}</h5>
            </div>
        ):null
        return(
            <div className ="container">
                <div className="center">
                    {post}
                </div>
            </div>
        )
    }
}

export default Post