import React from 'react';
import axios from 'axios';
import Articles from '../Articles';
import CustomForm from '../Form';

class ArticleList extends React.Component {

  state = {
    articles:[]
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
  .then(res=>{
    this.setState({
      articles:res.data
    });
  }) 
 }

  render(){
    return(
      <div>
        <Articles data={this.state.articles}/>
        <br/>
        <h2>Create Article</h2>
        <CustomForm requestType="post" articleID={null} buttonText="Create"/>
      </div>
    );
  }
}

export default ArticleList;