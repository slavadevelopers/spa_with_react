import { LS, delay } from '../../utils/index';

export const ADD_TODO = 'ADD_TODO';
export const LIKES ='LIKES';
export const DELETE_ITEM ='DELETE_ITEM';
export const GET_TODO_LIST = 'GET_TODO_LIST';

export function addTodo(todoList, name) {
    let error = '';
    if (!name) {
        error = 'Нельзя добавить пустое поле'
    }

    let id = 1;

    if (todoList.length) {
        id = todoList[todoList.length - 1].id + 1;
    }
    return {
        type: ADD_TODO,
        id, name, error
    }
}


export function likes(item) {
    const liked = !item.liked;
    return {
        type: LIKES,
        item, liked
    }
}

export function deleteItem(item) {
    return {
        type: DELETE_ITEM,
        item
    }
}

export function getTodoList() {
    const todoList = LS.get('todoList');

    return (dispatch) => {
        delay(4000).then(() => {
            dispatch({
                type: GET_TODO_LIST,
                todoList
            });
        });
    }
}
