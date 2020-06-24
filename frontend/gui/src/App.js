import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import CustomLayout from './components/containers/Layout';
import * as actions from './store/actions/auth';

class App extends React.Component {

  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  
  render(){
    return (
      <div>
        <Router >
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onTryAutoSignup: ()=> dispatch( actions.authCheckState() )
  }
}

const mapStateToProps = (state)=>{
  return {
    isAuthenticated: state.token !== null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
