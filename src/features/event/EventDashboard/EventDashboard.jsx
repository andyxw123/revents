import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const dashboardEvents = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
    ],
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
    ],
  },
];

class EventDashboard extends Component {
  state = {
    events: dashboardEvents,
    isOpen: false,
    selectedEvent: null,
  };

  // handleIsOpenToggle = () => {
  //   this.setState((prevState) => ({
  //     isOpen: !prevState.isOpen,
  //   }));
  // };

  // handleIsOpenToggle = () => {
  //   //Rather than use prevState can de-stucture it t
  //   //get isOpen directly (enc)
  //   this.setState(({isOpen}) => ({
  //     // When using previous state in this way
  //     // it will happen synchronously
  //     isOpen: !isOpen,
  //   }));
  // };

  onOpenCreateForm = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null,
    });
  };

  onCancelCreateForm = () => {
    this.setState({
      isOpen: false,
      selectedEvent: null,
    });
  };

  onEventSelected = (e, event) => {
    //NB. e is the button click args (e.target etc)
    // console.log(e);
    // console.log(event);
    this.setState({
      selectedEvent: event,
      isOpen: true,
    });
  };

  onEventCreated = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false,
    }));
  };

  onEventUpdated = (updatedEvent) => {
    //Update using previous state
    this.setState(({ events }) => ({
      events: events.map((event) => {
        if (event.id === updatedEvent.id) {
          // Use the spread operator to copy the event properties
          // to a new object instance
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null,
    }));
  };

  onEventDeleted = (id) => {
    this.setState(({ events }) => ({
      events: events.filter((event) => event.id !== id),
    }));
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;

    return (
      <div>
        <Grid stackable>
          <Grid.Column width={10}>
            <EventList 
            events={events} 
            onSelectEvent={this.onEventSelected} 
            onEventDeleted={this.onEventDeleted} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button onClick={this.onOpenCreateForm} positive>
              Create Event
            </Button>
            {/* Also pass handleIsOpenToggle to the event form to close it */}
            {/* This is inverse data flow as the child is changing state in the parent */}
            {isOpen && (
              <EventForm
                // NOTE: key changes will cause the form to be re-rendered
                key={selectedEvent ? selectedEvent.id : 0}
                selectedEvent={selectedEvent}
                onEventUpdated={this.onEventUpdated}
                onEventCreated={this.onEventCreated}
                onCancelFormOpen={this.onCancelCreateForm}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
