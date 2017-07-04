import React  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Input extends React.Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        divClasses: PropTypes.string,
        error: PropTypes.string
    };

    constructor(props) {
        super(props);

        const { value } = this.props;
        this.state = { value };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.props.onChange(value);
        this.setState({ value });
    }

    render() {
        const divClasses = classNames({
            'form-control': true,
            'form-control-danger': !!this.props.error
        });

        const { value } = this.props;

        return (
            <div>
                <input
                    type='text'
                    value={ value }
                    onChange={ this.handleChange }
                    className={ divClasses }
                />
                { this.props.error ? <div className='form-control-feedback'>{ this.props.error }</div> : null }
            </div>
        );
    }

}
