import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './components/containers/ArticleListView';
import ArticleDetail from './components/containers/ArticleDetailView';
import Login from './components/containers/Login';
import Signup from './components/containers/Signup';

const BaseRouter = () =>(
<div>
  <Route exact path='/' component={ArticleList}/>
  <Route path='/articles/:articleID/' component={ArticleDetail}/>
  <Route path='/login/' component={Login}/>
  <Route path='/signup/' component={Signup}/>
</div>
);

export default BaseRouter;