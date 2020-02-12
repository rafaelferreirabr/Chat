import React, { Component } from 'react';
import { ChatStyle } from './style';
import socketIOClient from 'socket.io-client';
// import axios from 'axios';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: [],
            mensagem: '',
            dbMsg: [],
            socket: this.io()

        };
    };

    io(){
        // const { endPoint } = this.state;
        const socket = socketIOClient('http://10.0.10.254:3001');
        return socket
    }

    componentDidMount() {
        const userName = this.props.location.param;
        this.setState({ userName: userName });

        // console.log(this.props.location.param);

        // const { endPoint } = this.state;
        // const socket = socketIOClient(endPoint);
        // const socket = this.io();
        this.state.socket.on("mensagens anteriores", data => {this.setState({dbMsg:data})});

        this.state.socket.on("mensagem criada", data => {this.setState({dbMsg:[...this.state.dbMsg, data]})});
        // console.log(this.state.dbMsg);

        // socket.emit('cria mensagem', 'oi');
        // console.log(this.state.dbMsg);

        // axios.get(this.state.endPoint2)
        //     .then(res => {
        //         this.setState({ dbMsg: res.data });
        //         console.log(res.data);
        //         console.log(this.state.dbMsg);
        //     });
    }

    handleText = e => {
        this.setState({ mensagem: e.target.name });
        // console.log(this.state.mensagem);
    }

    handleTextSubmit = e => {
        e.preventDefault();
        // this.setState({mensagem: this._name.value});
        // this.setState({ dbMsg: [...this.state.dbMsg, this.state.mensagem] });
        const all = {nome:this.state.userName.userName, mensagem:this.state.mensagem}
        // const socket = this.io();
        this.state.socket.emit('cria mensagem', all);
        this.setState({dbMsg:[...this.state.dbMsg, {nome: this.state.userName.userName, mensagem:this.state.mensagem}]});
        this.setState({mensagem: ''});

        // axios.post(this.state.endPoint2, { nome: this.state.userName.userName, mensagem: this.state.mensagem })
        // console.log(this.state.userName.userName);
        // console.log(this.state.mensagem);
        // console.log(this.state.dbMsg);
        // this.setState({ mainChat: [...this.state.mainChat, this.state.chat] });
        // this.setState({ chat: '' });





        // this.scroll();this.state.mensagem
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
                <div id="chat-window" className="textContent">
                {console.log('kakakakak')}
                    <ul>
                        {this.state.dbMsg.reverse().map(textChat => <li key={textChat.id}><strong>{textChat.nome}:</strong> {textChat.mensagem} </li>)}
                    </ul>
                </div>
                <div className="inputPosition"><input type="text" name="textChat"
                    autoComplete="off"
                    onChange={this.handleText} 
                    // ref={input => this._name = input}
                    // value={this.state.mensagem}
                    />
                    <button type="button"
                        // onKeyDown={this.handleTextSubmitKey}
                        onClick={this.handleTextSubmit}>Enviar</button>
                </div>
            </ChatStyle>

        );
    }

};

export default Chat;