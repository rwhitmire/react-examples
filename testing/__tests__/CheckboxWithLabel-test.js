jest.dontMock('../CheckboxWithLabel.js');

describe('CheckboxWithLabel', function() {
	it('changes the text after click', function(){
		var React = require('react/addons');
		var CheckboxWithLabel = require('../CheckboxWithlabel.js');
		var TestUtils = React.addons.TestUtils;

		// render a checkbox with label in the document
		var checkbox = TestUtils.renderIntoDocument(
			<CheckboxWithLabel labelOn="On" labelOff="Off" />
		);

		// verify that it's off by default
		var label = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'label');
		expect(label.getDOMNode().textContent).toEqual('Off');

		// simulate a click and verify that it is now on
		var input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
		TestUtils.Simulate.change(input);
		expect(label.getDOMNode().textContent).toEqual('On');
	});
});