import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../action/actionCreator'
import Main from './Main'

const mapStateToProps = ({ posts, comments}) => {
  return {
    posts,
    comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)
export default App