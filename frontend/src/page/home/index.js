import React, { Component } from 'react';
import { HomeStyle } from './style';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName:''
        }
    }

    inputHandleText = e => {
        this.setState({ userName: e.target.value });
    }

    render () {
        const userName = this.state.userName;

        const chat = {
            pathname: "/chat",
            param: {userName}
        };
    
        return(
            <HomeStyle>
                <h1>Nome de Usuário</h1>
                <div className="positionInput">
                    <input type="text" onChange={this.inputHandleText}/>
                </div>
                <Link to={chat}>Entrar</Link>
            </HomeStyle>
            
        );
    };
    
};

export default Home;