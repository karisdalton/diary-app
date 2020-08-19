class Event {
  constructor(eventName, date, description, image) {
    this.eventName = eventName;
    this.date = date;
    this.description = description;
    this.image = image;
  }
}

// UI class Handle UI
class UI {
  static displayEvents() {
    const StoredEvents = [
      {
        eventName: "Party",
        date: "14/08/2020",
        description: "House party at Johns",
        image: "./assets/pepper.jpg",
      },
      {
        eventName: "Wedding",
        date: "10/08/2020",
        description: "Wedding attended for best friend",
        image: "./assets/pepper.jpg",
      },
      {
        eventName: "Interview",
        date: "01/08/2020",
        description: "Went for an interview that i failed",
        image: "./assets/pepper.jpg",
      },
      {
        eventName: "Interview",
        date: "01/08/2020",
        description: "Went for an interview that i failed",
        image: "./assets/pepper.jpg",
      },
    ];

    const events = StoredEvents;

    events.forEach((event) => UI.addEventToList(event));
  }

  static addEventToList(event) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${event.eventName}</td>
            <td>${event.date}</td>
            <td>${event.description}</td>
            <td><a href="#" class="fas fa-trash-alt text-danger delete"></a></td>
        `;

      list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#date").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#file").value = "";
    document.querySelector("#summernote").value = "";
  }
}

// Local Storage

// Display Events
document.addEventListener('DOMContentLoaded', UI.displayEvents);


// Add event
document.querySelector('#form-control').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values:
  const eventTitle = document.querySelector('#name').value;
  const dateTime = document.querySelector('#date').value;
  // const imageUpload = document.querySelector('#imageUpload').value;
  const textArea = document.querySelector('#summernote').value;
  
  // instiate event
  const event = new Event(eventTitle, dateTime, textArea);
  console.log(event);
  
  // Add event to UI
  UI.addEventToList(event);
  
  // Clear fields
  UI.clearFields();
});


// Remove an Event
// document.querySelector('.event-list').addEventListener('click', (e) => {
//     console.log(e.target);
// });
