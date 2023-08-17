import React from 'react';
import { TodoCount } from './TodoCount.js';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoAddButton } from './TodoAddButton.js';
import { TodoTitle } from './TodoTitle.js';
import './index.css';
import './TodoTitle.css';
import './TodoItem.css';
import './TodoHeader.css';
import './TodoCounter.css'
import './TodoAddItemInput.css'
import './TodoListSection.css'
import addIcon from './assets/add-task.svg'
import uncompleteIcon from './assets/uncomplited.svg';
import completedIcon from './assets/completed.svg';
import trashIcon from './assets/trash-bin-2-svgrepo-com.svg'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React.js', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'SoloLearn lessons', completed: false },
  { text: 'Duolingo Lessons', completed: false },
]

function App() {
  return (
    <React.Fragment>

      <main className='center'>
        <header>
          <TodoTitle day={'Lunes'} />
          <TodoCount completed={16} total={25} />
        </header>

        <form id="add-item-input">
          <TodoSearch />
          <TodoAddButton icon={addIcon} />
        </form>

        <section id='list-section'>
          <TodoList>
            {defaultTodos.map(todo => (

              <TodoItem
                trashIcon={trashIcon}
                completedIcon={completedIcon}
                uncompleteIcon={uncompleteIcon}
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
        </section>

        <footer>
          Made by
          <a
            href='https://github.com/HectorGalindoPedraza'
            target='_blank' rel="noreferrer"
          >
            @hecgph
          </a>
        </footer>
      </main>

    </React.Fragment>
  );
}

export default App;