
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchApps } from '../redux/actions'


class Filter extends Component {


  render() {
    const { labels, class_name, dispatch } = this.props;
    return (
      labels.map((labels, index) => (
        <button type="button" className="btn btn-success btn-sm" onClick={() => dispatch(fetchApps(labels, class_name))}>{labels}</button>
      ))
    )
    }
  }
   
function mapStateToProps() {
  return {

  }
}
 
export default connect(mapStateToProps)(Filter)
