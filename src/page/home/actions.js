export const ADD_TODO = 'ADD_TODO';
export const LIKES ='LIKES';
export const DELETE_ITEM ='DELETE_ITEM';

export function addTodo(id, name) {
    let error = '';
    if (!name) {
        error = 'Нельзя добавить пустое поле'
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

export function deleteItem(item, todoList) {
    let error = '';
    if (todoList.length === 1) {
        error = 'Список не должен быть пустым';
    }
    return {
        type: DELETE_ITEM,
        item, error
    }
}
