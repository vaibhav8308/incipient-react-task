import TodoList from '../components/Todolist/Todolist.js';
import "../home/index.css"

function Home() {

    return (
        <div>
            <h3 className="home">My To-Do-List</h3>
            <TodoList />
        </div>
    )
};

export default Home;