import './App.css'
import StudentCard from './components/StudentCard.jsx'
function App() {
    return (
        <div className="app">
            <header className="dashboard-header">
                <h1>Student Information Dashboard</h1>
                <p>View and manage student details</p>
            </header>
            <main className="dashboard-main">
                <div className="cards-container">
                    <StudentCard name="Afrah" id="s202257660" dept="Computer Science" />
                    <StudentCard name="Maryam Alzahrani" id="s2022xxxx" dept="Finance" />
                </div>
            </main>
        </div>
    )
}
export default App
