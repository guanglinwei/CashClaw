import Popup, { PopupProps } from './component/Popup';

function App() {
    const displayData: PopupProps[] = [{
        title: "Title here",
        content: (
            <div>
                Put content here
            </div>
        )
    },];
    return (
        <div className="App">
            <Popup title={"Title"} content={<div>Put </div>} />
        </div>
    );
}

export default App;
