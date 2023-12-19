//useEffect 를 사용해서 document.title 상단바 위 제목 변경
//map 활용해서 todoList
//useCallback를 활용해서 버튼만들어서 증가하기 만들기

import React, { useState, useEffect } from "react";

function ExCallBack() {
    const [count, setCount] = useState(0);
    const inClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={inClick}>증가하기</button>
        </div>
    )
};

const TodoList = () => {
    //할일 목록 배열을 위한 state 생성
    const [todos, setTodos] = useState([]);
    //할일 추가하기 위한 input String state 생성
    const [newTodo, setNewTodo] = useState('');
    //할 일이 추가될 때마다 자동으로 할 일 갯수 추가해주는 count state생성
    const [count, setCount] = useState(0);

    //할 일이 추가될 때 사용하는 함수
    const addTodo = () => {
        //if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
            setCount(count + 1);
    };

        //할 일을 삭제하는 함수
    const removeTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos.splice(index,1);
        setTodos(updateTodos);
    };

    //할 일을 삭제할 경우 count 감소
    setCount(count - 1); 

    useEffect(() => {
        document.title = `TodoList : ${count}`;
    }, [count]); //count를 사용할 때 마다


    return (
        <div>
            <h2>TodoList</h2>
            <div>
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button onClick={addTodo}>추가하기</button>
            
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                    {todo}
                    <button onClick={() => removeTodo(index)}>삭제하기</button>
                    </li>
                    ))}

            </ul>
            </div>
        </div>
    );
};



function MiniApp() {
    return (
        <div>
        <ExCallBack />
        <TodoList />
        </div>
    )
};


export default MiniApp;