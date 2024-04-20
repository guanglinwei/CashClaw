import Popup, { PopupProps } from './component/Popup';

function App() {
    
    const displayData: PopupProps[] = [{
        title: "Title here",
        content: (
            <div>
                Put content here
            </div>
        )
    },]
    ;
    return (
        
        <div className="App">
            <p className = "cash">
                Cash Card
            </p>
            <div className="desc">
                    Welcome to Cash Card!! Click the button to start and get a prize!
                </div>
            <Popup title={"Cash Card"} content={
                <div>
                    Thank You! Click the link to continue.
                </div>} />
        </div>
    );
}

export default App;
