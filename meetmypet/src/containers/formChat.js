import { connect } from 'react-redux';
import FormChat from '../Components/FormChat';
import { addMessage, changeMessage, postmessage } from '../actions/chat';
import { fetchGroupPage } from '../actions/groupPage';

const mapStateToProps = (state) => ({
    inputValue: state.chat.content.content,
    messages: state.chat.messages,
    author: state.loginModal.animal,
    avatar: state.loginModal.image
});

const mapDispatchToProps = (dispatch) => ({
    addMessage: (inputValue, author, avatar) => {
        dispatch(addMessage(inputValue, author, avatar));
    },
    changeMessage: (message) => {
        dispatch(changeMessage(message));
    },
    postmessage: (message) => {
        dispatch(postmessage(message));
    },
    fetchGroupPage: (id) => {
        dispatch(fetchGroupPage(id));
      }
});

// Container
const FormChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormChat);

// == Export
export default FormChatContainer;