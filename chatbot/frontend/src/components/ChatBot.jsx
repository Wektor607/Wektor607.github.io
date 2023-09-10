import React, { useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png'

function InputData() {
    const location = useLocation();
    const [text, setText] = useState('');
    const [responseText, setResponseText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleClear = () => {
        setText('');
    }

    const handlePostText = async() => {
        try {
            const formData = new FormData();
      
            formData.append('message', text);
            console.log(text);

            const response = await axios.post('http://localhost:8000/', formData);

            if (response.data.success) {
                setResponseText(response.data.response_message);
            }

          } catch (error) {
            console.error('Error fetching coordinates:', error);
          }
    }

    const renderContent = () => {
        const textStyle = {
            fontWeight: 'normal', // Убираем жирность
            fontFamily: 'Arial, sans-serif', // Устанавливаем шрифт Arial
        };
    
        if (location.pathname === '/') {
            return (
                <div>
                    <div className="container">
                        <h1 className="text-center">Welcome - Let's formata text with AI !</h1>
                        <br />
                        <div className="card">
                            <div className="card-body">
                                <h3>Отформатированный текст:</h3>
                                <h5 className="card-text" style={textStyle}>{responseText}</h5>
                            </div>
                        </div>
                        <br />
                        <div className="form-floating">
                            <input
                                type="text"
                                onChange={handleChange}
                                value={text}
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea"
                            />
                            <label htmlFor="floatingTextarea">Введите текст</label>
                            <div className="my-3">
                                <button onClick={handlePostText} type="button" className="btn btn-primary">Отправить</button>
                                <button onClick={handleClear} type="button" className="btn btn-danger mx-3">Очистить</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={logo} className="w-25 h-25" />
                    <a className="navbar-brand" href="/"><h4>Home</h4></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active" aria-current="page"><h4>About us</h4></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br/>
            {renderContent()}
        </div>
    );
}

export default InputData;
