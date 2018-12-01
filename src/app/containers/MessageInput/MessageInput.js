import { connect } from 'react-redux'
import { MessageInput } from '../../components/MessageInput/MessageInput'
import { sendMessageRequest } from '../../@redux/actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  send: (message) => dispatch(sendMessageRequest(message))
})

export default connect(
  null,
  mapDispatchToProps
)(MessageInput)
