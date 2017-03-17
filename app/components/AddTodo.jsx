var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
    onSubmit: function(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var text = this.refs.text.value;

        if(text.length > 0){
            this.refs.text.value = '';
            dispatch(actions.addTodo(text));
        } else {
            this.refs.text.focus();
        }
    },
    render: function(){
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit}>
                    <input type="text" ref="text" placeholder="What do you need to do?"/>
                    <button className="button primary expanded">Add</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);