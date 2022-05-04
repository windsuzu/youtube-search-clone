import Header from "./components/header";
import Sidebar from "./components/sidebar/sidebar";
import Results from "./components/results";

function App() {
    return (
        <>
            <Header />
            <div className="flex bg-primary">
                <Sidebar />
                <Results />
            </div>
        </>
    );
}

export default App;
