import React, {MouseEvent} from 'react';
import './App.css';

function App() {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Dima')
    // }
    //
    // const mySecondSubscriber = () => {
    //     console.log('Hello Im Mira')
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    // const foo1 = () => {
    //     console.log(100200)
    // }
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log('Hello')}}>My YouTubeChanel-1</button>*/}

            {/*<button onClick={myFirstSubscriber}>My YouTubeChanel-1</button>*/}
            {/*<button onClick={mySecondSubscriber}>My YouTubeChanel-2</button>*/}

            <button onClick={(event: MouseEvent<HTMLButtonElement>)=>onClickHandler('Dima')}>My YouTubeChanel-1</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>)=>onClickHandler('Mira')}>My YouTubeChanel-2</button>
            {/*<button onClick={()=>onClickHandler('some info')}>My YouTubeChanel-3</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=>foo2(100200)}>2</button>*/}
        </div>
    );
}

export default App;
