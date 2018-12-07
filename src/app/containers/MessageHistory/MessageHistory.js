import { connect } from 'react-redux'
import { MessageHistory } from '../../components/MessageHistory/MessageHistory'

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages
})

export default connect(
  mapStateToProps
)(MessageHistory)
