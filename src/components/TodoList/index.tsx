'use client'

import React from 'react'
import { RootState } from '@/redux/store'; 
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '@/redux/slice/todoSlice';
import { Todo } from '@/types/TodoList';

export default function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [valueInput, setValueInput] = React.useState<string>('')

  const handleChangeInput = (e: any) => {
    setValueInput(e.target.value)
  }

  const handleAddTodoList = () => {
    if (valueInput.trim() !== '') {
      const newTodo: Todo[] = [
        {
          id: 5,
          title: valueInput.trim()
        }
      ]
      dispatch(addTodo(newTodo))
      setValueInput('')
    }
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
          onChange={handleChangeInput}
        />
        <button className="px-[24px] py-[12px] bg-[#257895] text-white font-semibold rounded-[5px]" onClick={handleAddTodoList}>
          Add
        </button>
      </div>
      <div className="px-[24px] mt-[100px]"></div>
    </div>
  )
}
