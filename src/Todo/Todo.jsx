import {useState} from "react";
import ToDoItem from "./ToDoItem";
import _uniqueId from 'lodash/uniqueId';


// ЗАДАЧИ НА THIS

// function myFunc() {
//     let obj1 = {
//         name: 'dima',
//         age: 23,
//         obj2: {
//             name: 'veroNika',
//             getInfo: () => console.log(this),
//             getInfo2: function () {
//                 console.log(this)
//             }
//         },
//         getInfo2: function () {
//             console.log(this)
//         }
//     }
//     obj1.getInfo2()
//     obj1.obj2.getInfo()
//
//     let myFunc2 = function () {
//         obj1.obj2.getInfo()
//         console.log(this)
//     }
//     let obj3 = {
//         name: 'obj3',
//         myFunc2
//     }
//     obj3.myFunc2()
// }
//
// let objTest = {
//     name: 'objTest',
//     getInfo: myFunc
// }
// objTest.getInfo()
//
// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         console.log(counter)
//     }
//     return myFunction;
// }
// let counter = createCounter()



// var vs let
//
// let i
// for (i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }
// i = 10
// {
//     i = 10
//     console.log(i)
// }
// {
//     i = 10
//     console.log(i)
// }

// Array.prototype.myMap = function(callback) {
//     let array = []
//     for (let i = 0; i < this.length; i++){
//         array.push(callback(this[i]))
//     }
//     return array
// }

// flattened
//
// Array.prototype.myFlattened = function () {
//     let result = []
//     for (let i = 0; i < this.length; i++){
//         if (Array.isArray(this[i])) {
//             const fluttened = this[i].myFlattened()
//             result.push(...fluttened)
//
//         } else {
//             result.push(this[i])
//         }
//     }
// }

// const obj = {
//     name: 'Dima',
//     age: 24
// }
// const str = 'ku'
// function foo(a, b) {
//     a.age = 17
//     b = 'kuEDITED'
//     return () => {
//         console.log(a.age, b)
//     }
// }
// let sss = foo(obj, str)
// sss()
// console.log(obj, str)
//

// function toCurry(func) {
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args)
//         }
//         return (...args2) => {
//             return curried.apply(this, args.concat(args2))
//         }
//     }
// }
//
// function sum(a, b) {
//     return a + b
// }
// let newSum = toCurry(sum)
// console.log(newSum(5)(10))




export default function ToDo() {
    let handleButtonClick = (e) => {
        e.preventDefault()
        setTodos((prev) => [...prev, {
            name: input,
            id: _uniqueId(input),
            completed: false
        }])
        setInput('')
    }
    let handleInputChange = (e) => {
        setInput(e.target.value)
    }
    let handleItemDelete = (deleteId) => {
        setTodos((prev) => {
            return prev.filter((item) => item.id !== deleteId)
        })
    }
    let handleCheckboxChange = (itemId) => {
        let newItem = todos.filter((item) => item.id === itemId)
        newItem = newItem[0]
        newItem.completed ? newItem.completed = false : newItem.completed = true
        setTodos(todos.filter((item) => item.id !== itemId))
        setTodos((prev) => {
            return [
                ...prev,
                newItem
            ]
        })
    }
    let handleSearchChange = (e) => {
        setSearch(e.target.value)
        setFiltered(todos.filter((item) => {
            return item.name.includes(e.target.value)
        }))
    }

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState([])

    return (
        <div>
            <form action="post">
                <input type="text" value={input} onChange={handleInputChange}/>
                <button onClick={handleButtonClick}>Добавить</button>
                <span>поиск</span>
                <input
                    value={search}
                    onChange={handleSearchChange}
                />
                {todos.map((todo, index) => (
                    todo.completed ? null :
                        <ToDoItem
                            item={todo}
                            key={index}
                            handleItemDelete={handleItemDelete}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                ))}
                <hr/>
                <span>completed todos</span>
                {todos.map((todo, index) => (
                    todo.completed ?
                        <ToDoItem
                            item={todo}
                            key={index}
                            handleItemDelete={handleItemDelete}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                        : null
                ))}
                <hr/>
                <span>filtered todos</span>
                {filtered.map((todo, index) => (
                    search &&
                    <ToDoItem
                        item={todo}
                        key={index}
                        handleItemDelete={handleItemDelete}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </form>
        </div>
    )
}