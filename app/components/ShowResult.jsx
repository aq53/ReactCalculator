var React = require('react');

var ShowResult = React.createClass({
    render: function () {
        return (
            <div>
                <input className="container__header" type="display" value={this.props.inputField} />
            </div>
        );
    }
});

module.exports = ShowResult;