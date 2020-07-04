import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  // 1. State first
  // 2. Lifecycle methods
  // 3. Local Functions

  // It's not compulsory to initialise the state fields
  // (will be set as the change)
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '',
  };

  //Called immediately after a component is mounted. 
  //Setting state here will trigger re-rendering.
  componentDidMount() {
    const {selectedEvent} = this.props;
    if (selectedEvent !== null) {
      // Use the spread ... operator to populate state
      this.setState({
        ...selectedEvent
      })
    }
  }

  onFormSubmitted = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.onEventUpdated(this.state);
    } else {
      this.props.onEventCreated(this.state);
    }
  };

  //Generic change handler - use the name to set the state
  //by using the name as the field indexer
  //{target: {name, value}} de-structures e.target.name & e.target.value
  onInputChanged = ({target: {name, value}}) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { onCancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmitted} autoComplete='off'>
          <Form.Field>
            <label>Event Title</label>
            {/* Set name, value and onChange event */}
            <input
              name='title'
              value={title}
              onChange={this.onInputChanged}
              placeholder='Event Title'
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              value={date}
              onChange={this.onInputChanged}
              type='date'
              placeholder='Event Date'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              value={city}
              onChange={this.onInputChanged}
              placeholder='City event is taking place'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              value={venue}
              onChange={this.onInputChanged}
              placeholder='Enter the Venue of the event'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              value={hostedBy}
              onChange={this.onInputChanged}
              placeholder='Enter the name of person hosting'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button type='button' onClick={onCancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
