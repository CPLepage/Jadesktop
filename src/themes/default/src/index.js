import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #262626;
    color: #eae8e5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    letter-spacing: 2px;
    font-weight: lighter;
`;

const timeRef = React.createRef();

const App = () => (
    <Wrapper>
        <div ref={timeRef}>
            {
                time()
            }
        </div>
    </Wrapper>
);

function time(){
    let now = new Date();
    return  (now.getHours() < 10 ? "0" + now.getHours() : now.getHours()) + ":" +
        (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) + ":" +
        (now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds())
}

ReactDOM.render(<App />, document.querySelector("#root"), () => {
    setInterval(() => {
        timeRef.current.innerHTML = time();
    }, 1000)
});