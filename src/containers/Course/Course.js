import React, { Component } from 'react';

class Post extends Component {
    constructor(props){
        super()
       this.state={
            coursetitle: null
        }
    }
    componentDidMount(){
        const title = [];
        const query = new URLSearchParams(this.props.location.search);
        for(let par of query.entries()){
            title.push(par);
        }
        this.setState({
            coursetitle: title[0]
        })
    }
    render () {

        console.log(this.props);
       
        return (
            <div>
                <h1>_COURSE_TITLE_: {this.state.coursetitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseid}</p>
            </div>
        );
    }
}

export default Post;