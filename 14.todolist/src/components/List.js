import Todoitem from './Todoitem';
import { useState } from 'react';

// todos = 배열4개
const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState('');
    const getSearchData = () => {
        if(search == "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        )
    }
    const filterTodos = getSearchData();
    
    return (
        <div className='List'>
            <h4>Todo List</h4>
            <input placeholder="검색어를 입력하세요." 
                onChange={(e) => {
                    setSearch(e.target.value);
                }} />
            <div className='todos_wrapper'>
                {
                    filterTodos.map((todo, i) => 
                    // <Todoitem todo={todo}/>
                    <Todoitem {...todo} key={i} onUpdate={onUpdate} onDelete={onDelete}/>
                    )
                }
                
            </div>
        </div>
    )
}

export default List;