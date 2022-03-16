import { useEffect, useState } from 'react';
import Button from '../Button/Button.js';
import Input from '../Input/Input.js';
import List from '../List/List.js';
import '../Todolist/Todolist.css'

function TodoList() {



    const [inputVal, setInputVal] = useState('');
    const [list, setList] = useState([]); // array of objects

    // componentDidMount
    useEffect(() => {
        // To get the localStroage to get the todoList data
        let todoList = localStorage.getItem('todoList');
        if (todoList) {
            todoList = JSON.parse(todoList); // String --> object
            setList(todoList);
        }

    }, []);

    // componentDidUpdate
    useEffect(() => {
        const todoList = JSON.stringify(list); // Object --> String
        localStorage.setItem('todoList', todoList);
        console.log('list is updated !!!! ');
    }, [list]);

    // componentDidUpdate
    useEffect(() => {
        console.log('inputVal is updated !!!! ');
    }, [inputVal]);


    const inputChangeHandler = (event) => {
        const value = event.target.value;
        // Updating the state is async by nature.
        setInputVal(value);

    };

    const inputKeyUpHandler = (event) => {
        if (event.key === "Enter") {
            buttonClickHandler();
        }
    };

    const buttonClickHandler = () => {
        if (inputVal.trim()) {
            const todoList = [...list];
            // Creating the array of object to make scalable solution and store all data
            todoList.push({
                itemName: inputVal,
                editItemName: inputVal,
                isDone: false,
                isEditing: false
            });
            setList(todoList);
            setInputVal('');
        } else {
            setInputVal('');
        }
    };

    const doneClickHandler = (itemIndex) => {
        const todoList = [...list];
        todoList[itemIndex].isDone = true;
        setList(todoList);
    };

    const deleteClickHandler = (itemIndex) => {
        const todoList = [...list];
        todoList.splice(itemIndex, 1);
        setList(todoList);
    };



    const onEditHandler = (itemIndex) => {
        const todoList = [...list];
        todoList[itemIndex].isEditing = true;
        setList(todoList);
    };

    const onEditCancel = (itemIndex) => {
        const todoList = [...list];
        todoList[itemIndex].editItemName = todoList[itemIndex].itemName;
        todoList[itemIndex].isEditing = false;
        setList(todoList);
    };

    const onEditInputChange = (itemIndex, event) => {
        const inputValue = event.target.value;
        const todoList = [...list];
        todoList[itemIndex].editItemName = inputValue;
        setList(todoList);
    };

    const onEditSave = (itemIndex) => {
        const todoList = [...list];
        const editedValue = todoList[itemIndex].editItemName.trim();
        if (editedValue) {
            todoList[itemIndex].itemName = editedValue;
            todoList[itemIndex].editItemName = editedValue
            todoList[itemIndex].isEditing = false;
            setList(todoList);
        } else {
            todoList[itemIndex].editItemName = todoList[itemIndex].itemName;
            todoList[itemIndex].isEditing = false;
            setList(todoList);
        }
    };

    return (
        <>
            <div className="box">
                <div className="userinput">
                    <Input
                        value={inputVal}
                        onChangeHandler={inputChangeHandler}
                        onKeyUpHandler={inputKeyUpHandler} />
                    <Button
                        onClickHandler={buttonClickHandler}
                    />
                </div>
                <div>
                    <List
                        value={list}
                        onDoneClickHandler={doneClickHandler}
                        onDeleteClickHandler={deleteClickHandler}

                        onEditClickHandler={onEditHandler}
                        onEditCancelHandler={onEditCancel}
                        onEditInputChangeHandler={onEditInputChange}
                        onEditSaveHandler={onEditSave} />
                </div>
            </div>
        </>
    );
};

export default TodoList;