import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import GridLayout from 'react-grid-layout';

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
    & .layout{
        width: 100%;
    }
    & .react-resizable{
        background-color: #48494c;
    }
`;

const timeRef = React.createRef();

let inspectorShowed = false;

const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
];
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
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={window.innerWidth}>
            <div key="a">a</div>
            <div key="b">b</div>
            <div key="c">c</div>
        </GridLayout>
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