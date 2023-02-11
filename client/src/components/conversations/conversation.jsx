import './conversation.scss';

const Conversation = () => {
  return (
    <div className='conversation'>
      <img className ="conversationImg "src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
      <span className="conversationName">John Doe</span>
    </div>
  );
}

export default Conversation;