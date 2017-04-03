var React = require('react');

var ShowResult = React.createClass({
    render: function () {
        return (
            <div>
                <input type="display" value={this.props.inputField} />
            </div>
        );
    }
});

module.exports = ShowResult;