import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import { addTodo } from './actions'
import './styles.less';

class Home extends React.Component {

    static path = '/';

    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        }

        bindAll(this, ['renderTodo', 'onChangeInput', 'addTodo']);
    }

    onChangeInput(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        const { todoList } = this.props.home;
        const id = todoList[todoList.length - 1].id + 1;
        const name = this.state.todoName;
        this.props.dispatch( addTodo(id, name) );
        this.setState({ todoName: '' });
    }

    renderTodo(item) {
        return (
            <li key={ item.id }>{ item.name }</li>
        );
    }

    render() {
        const { todoName } = this.state;
        const { todoList, error } = this.props.home;
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


function mapStateToProps(state) {
    return {
        home: state.home
    }
}


export default connect(mapStateToProps)(Home);
