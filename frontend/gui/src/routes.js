import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from './components/containers/ArticleListView';
import ArticleDetail from './components/containers/ArticleDetailView';

const BaseRouter = () =>(
<div>
  <Route exact path='/' component={ArticleList}/>
  <Route path='/:articleID' component={ArticleDetail}/>
</div>
);

export default BaseRouter;