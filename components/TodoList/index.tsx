'use client'

import React from 'react'
import { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../../redux/slice/todoSlice'
import { Todo } from '../../types/TodoList'

export default function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)
  const [valueInput, setValueInput] = React.useState<string>('')

  const handleChangeInput = (e: any) => {
    setValueInput(e.target.value)
  }

  const handleAddTodoList = () => {
    if (valueInput.trim() !== '') {
      const newTodo: Todo[] = [
        {
          id: todos.length + 1,
          title: valueInput.trim()
        }
      ]
      dispatch(addTodo(newTodo))
      setValueInput('')
    }
  }

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="mt-[100px] mb-[200px] w-[50%] m-auto">
      <p className="mb-[100px] text-[32px] font-semibold text-center">
        Todo List
      </p>
      <div className="flex justify-center items-center gap-12">
        <input
          className="px-[10px] py-[12px] w-[50%] border-[1px]"
          placeholder="Enter your content"
          value={valueInput}
          onChange={handleChangeInput}
        />
        <button
          className="px-[24px] py-[12px] bg-[#257895] text-white font-semibold rounded-[5px]"
          onClick={handleAddTodoList}
        >
          Add
        </button>
      </div>
      <div className="px-[32px] mt-[100px]">
        <div>
          {todos.map((item, index) => (
            <div className="mb-8 flex justify-between items-center" key={item.id + index}>
              <li className="text-[20px] font-medium list-disc">
                {item.title}
              </li>
              <button className="px-[24px] py-[10px] bg-[#245396] text-white rounded-[5px]" onClick={() => handleDeleteTodo(item.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
