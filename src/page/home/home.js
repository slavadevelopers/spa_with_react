import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { addTodo, likes, deleteItem, getTodoList } from './actions';
import classNames from 'classnames';
import { LS } from '../../utils/index';
import Loader from '../../components/ui/loader/index';
import './styles.less';

class Home extends React.Component {

    static path = '/';

    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        bindAll(this, ['renderTodo', 'onChangeInput', 'addTodo']);

        this.props.dispatch( getTodoList() );
    }

    onChangeInput(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        this.props.dispatch( addTodo(this.props.home.todoList, this.state.todoName) );
        this.setState({ todoName: ''});
    }

    renderTodo(item) {
        const classLikeBtn = classNames('btn btn-secondary', {
            'btn-success': item.liked
        });
        return (
            <li key={ item.id } className='list-item'>
                { item.name }
                <span className='btn-panele'>
                    <button onClick={this.deleteItem.bind(this, item)} className='btn btn-panele__btn btn-secondary'>Delete</button>
                    <button onClick={this.likes.bind(this, item)} className={ classLikeBtn }>Like</button>
                </span>
            </li>
        );
    }

    likes(item) {
        this.props.dispatch(likes(item));
    }

    deleteItem(item) {
        const { todoList } = this.props.home;
        this.props.dispatch(deleteItem(item, todoList));
    }

    render() {
        const { todoName } = this.state;
        const { todoList, error, isLoading } = this.props.home;
        LS.set('todoList', todoList);
        return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <ul className='pl-15'>
                                { isLoading ?
                                    <Loader />
                                    : todoList.length
                                        ? todoList.map(this.renderTodo)
                                        : 'Элементов нет'
                                }
                            </ul>
                            <div className='row col-6'>
                                <div className='col-8'>
                                    <Input
                                        value={ todoName }
                                        onChange={ this.onChangeInput }
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

    componentWillUnmount() {
        LS.set('todoList', this.props.home.todoList);
    }
}


function mapStateToProps(state) {
    return {
        home: state.home
    }
}


export default connect(mapStateToProps)(Home);
