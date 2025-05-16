function PartyChatUI() {
    return (
        <div className="party-chat">
            <div className="party-chat__sidebar party-chat__sidebar-left">
                Left Sidebar
            </div>
            <div className="party-chat__main">
                <div className="party-chat__messages">
                    <p>User1: Hello!</p>
                    <p>User2: Hi there!</p>
                </div>
                <div className="party-chat__input">
                    <input type="text" placeholder="Type a message..." />
                    <button>Send</button>
                </div>
            </div>
            <div className="party-chat__sidebar party-chat__sidebar-right">
                Right Sidebar
            </div>
        </div>
    );
}

export default PartyChatUI;
