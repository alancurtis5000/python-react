import React from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';
import CustomForm from '../Form';

class ArticleDetails extends React.Component {

  state = {
    article:{}
  }

  componentDidMount(){
    const articleId = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleId}`)
  .then(res=>{
    this.setState({
      article:res.data
    });
  }) 
 }

  handleDelete = () =>{
    axios.delete(`http://127.0.0.1:8000/api/${this.state.article.id}`)
    this.props.history.push('/');
  }

  render(){
    return(
      <Card  title={this.state.article.title}>
        <p>{this.state.article.content}</p>
        <br/>
        <CustomForm requestType="put" articleID={this.state.article.id} buttonText="Update"/>
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">Delete</Button>
        </form>
      </Card>
    );
  }
}

export default ArticleDetails;