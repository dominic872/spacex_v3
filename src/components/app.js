import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchAppsIfNeeded, fetchApps } from '../redux/actions'

import Card from './card'
class App extends Component {

  componentDidMount() {
    const { dispatch, onclick } = this.props
    dispatch(fetchAppsIfNeeded())
  }


  render() {
    const { isFetching, apps, filters } = this.props
    const totalapps = apps.length;
    return (
       <>
         {isFetching && totalapps === 0 && <h2>Loading...</h2>}
         {!isFetching && totalapps === 0 && <h2>Empty.</h2>}
         <Card apps={apps} filters={filters} key={totalapps}/>

       </>
    );
  }
}
 
function mapStateToProps({ isFetching, apps, filters, onclick }) {
  return {
    isFetching,
    apps,
    filters,

  }
}
 
export default connect(mapStateToProps)(App)
