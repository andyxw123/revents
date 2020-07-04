import React, { Component } from 'react';
import { Segment, Item, Button, Icon, List } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
  render() {
    const { event, onSelectEvent, onEventDeleted } = this.props;

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name='clock' /> {event.date} |
            <Icon name='marker' /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map((attendee) => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          {/* To pass the event to the selectEvent handler, need to  
              enclose with an arrow function so it is only executed on click.
              Can also include the "e" args from the click itself
          */}

          <div>
            <Button
              onClick={(e) => onEventDeleted(event.id)}
              as='a'
              color='red'
              floated='right'
              content='Delete'
            />
            <Button
              onClick={(e) => onSelectEvent(e, event)}
              as='a'
              color='teal'
              floated='right'
              content='View'
            />
          </div>
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
