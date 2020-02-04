import React, { Component } from 'react';
import { ChatStyle } from './style';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: [],
            chat: '',
            mainChat: []
        };
    };

    componentDidMount() {
        const userName = this.props.location.param;
        this.setState({ userName: userName });
        // console.log(userName);
    }

    handleText = e => {
        this.setState({ chat: e.target.value });
        // console.log(this.state.chat);
    }

    handleTextSubmit = e => {
        e.preventDefault();
        this.setState({ mainChat: [...this.state.mainChat, this.state.chat] });
        this.setState({ chat: '' });
        // this.scroll();
        // console.log(this.state.userName);

    }

    // scroll = () => {
    //     const res = document.getElementById('chat-window'); 
    //     var xH = res.scrollHeight; 
    //     var xH = 2000; 
    //     res.scrollTo(0, xH);
    //     console.log(res);
    // }

    // handleTextSubmitKey = e => {
    //     let res = e.target.onkeypress;
    //     console.log(res);
    // }

    render() {
        return (
            <ChatStyle>
                <h1>Chat D5</h1>
                <div id="chat-window" className="textContent">{this.state.mainChat.map(textChat => <ul>{this.state.userName.userName}:<li>{textChat}</li></ul>)}</div>
                <div className="inputPosition"><input type="text" name="textChat"
                    autoComplete="off"
                    onChange={this.handleText} value={this.state.chat} />
                    <button type="button"
                        // onKeyDown={this.handleTextSubmitKey}
                        onClick={this.handleTextSubmit}>Enviar</button>
                </div>
            </ChatStyle>
        );
    }

};

export default Chat;