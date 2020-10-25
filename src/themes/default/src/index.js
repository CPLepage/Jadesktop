import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

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
    flex-direction: column;
`;

const timeRef = React.createRef();

let inspectorShowed = false;

const App = () => (
    <Wrapper>
        <div ref={timeRef}>
            {
                time()
            }
        </div>
        <Button
            className={"m-2"}
            variant={"light"}
            size={"sm"}
            onClick={() => {
                if(inspectorShowed)
                    JAK.Bridge.hideInspector()
                else
                    JAK.Bridge.showInspector()
                inspectorShowed = !inspectorShowed;
            }}
        >
            Inspector
        </Button>
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