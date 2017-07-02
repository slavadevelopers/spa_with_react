import React from 'react';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
import './styles.less';

export default class Home extends React.Component {

    static path = '/';

    constructor(props) {
        super(props);

        this.state = {
            todoName: '',
            todoList: [
                {
                    id: 1,
                    name: 'ToDo-1'
                }
            ],
            error: ''
        }

        bindAll(this, ['renderTodo', 'onChangeInput', 'addTodo']);
    }

    onChangeInput(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        if (this.state.todoName === '') {
            this.setState({ error: 'Нельзя добавить пустую запись' });
            return;
        };
        const id = this.state.todoList[this.state.todoList.length - 1].id + 1;
        const name = this.state.todoName;
        const todoItem = { id, name }
        const todoList = this.state.todoList;
        todoList.push(todoItem);
        this.setState({ todoName: '', error: '', todoList });
    }

    renderTodo(item) {
        return (
            <li key={ item.id }>{ item.name }</li>
        );
    }

    render() {
        const { todoName, todoList, error } = this.state;
        return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-4'>
                            <ul className='pl-15'>
                                { todoList.map(this.renderTodo) }
                            </ul>
                            <div className='row'>
                                <div className='col-8'>
                                    <Input
                                        value={ todoName }
                                        onChange={this.onChangeInput}
                                        error={ error }
                                    />
                                </div>
                                <div className='col-4'>
                                    <button
                                        className='btn btn-primary w-100'
                                        onClick={ this.addTodo }
                                    >Add ToDo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
