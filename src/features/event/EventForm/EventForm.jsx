import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  // It's not compulsory to initialise the state fields
  // (will be set as the change)
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '',
  };

  formSubmitted = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state);
  };

  //Generic change handler - use the name to set the state
  //by using the name as the field indexer
  //{target: {name, value}} de-structures e.target.name & e.target.value
  inputChanged = ({target: {name, value}}) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.formSubmitted} autoComplete='off'>
          <Form.Field>
            <label>Event Title</label>
            {/* Set name, value and onChange event */}
            <input
              name='title'
              value={title}
              onChange={this.inputChanged}
              placeholder='Event Title'
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              value={date}
              onChange={this.inputChanged}
              type='date'
              placeholder='Event Date'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              value={city}
              onChange={this.inputChanged}
              placeholder='City event is taking place'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              value={venue}
              onChange={this.inputChanged}
              placeholder='Enter the Venue of the event'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              value={hostedBy}
              onChange={this.inputChanged}
              placeholder='Enter the name of person hosting'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button type='button' onClick={cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
