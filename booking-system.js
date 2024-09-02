// booking-system.js

let bookings = [
  { name: "Chagai", startDate: "2024-09-02", endDate: "2024-09-15", color: "#FF5733" },
  { name: "Jesse", startDate: "2024-09-02", endDate: "2024-09-08", color: "#33FF57" },
  { name: "Berni", startDate: "2024-09-02", endDate: "2024-09-22", color: "#3357FF" },
  { name: "Daniel Ramos", startDate: "2024-09-02", endDate: "2024-09-08", color: "#FF33F1" },
  { name: "Nancy", startDate: "2024-09-02", endDate: "2024-09-06", color: "#33FFF1" },
  { name: "Casper", startDate: "2024-09-02", endDate: "2024-09-08", color: "#F1FF33" },
  { name: "Jacqueline", startDate: "2024-09-02", endDate: "2024-09-15", color: "#FF3333" },
  { name: "Emiliano", startDate: "2024-09-02", endDate: "2024-09-06", color: "#33FFAA" },
  { name: "Aldo", startDate: "2024-09-02", endDate: "2024-09-06", color: "#AA33FF" },
  { name: "Wei Wei", startDate: "2024-09-02", endDate: "2024-09-02", color: "#FFAA33" },
  { name: "Sandor", startDate: "2024-09-03", endDate: "2024-09-06", color: "#33AAFF" },
  { name: "Jessie Alvarado", startDate: "2024-09-05", endDate: "2024-09-07", color: "#FF3380" },
  { name: "Austin", startDate: "2024-09-10", endDate: "2024-09-15", color: "#80FF33" },
  { name: "Mahdi", startDate: "2024-09-17", endDate: "2024-09-17", color: "#3380FF" },
  { name: "Josi", startDate: "2024-09-15", endDate: "2024-09-15", color: "#FF8033" },
  { name: "Paxi", startDate: "2024-09-15", endDate: "2024-09-15", color: "#33FF80" }
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getGuestsForDay(date) {
  return bookings.filter(booking => 
      new Date(booking.startDate) <= date && new Date(booking.endDate) >= date
  );
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function bookStay(name, startDate, endDate) {
  if (!name || !startDate || !endDate) {
      throw new Error('Please fill in all fields');
  }

  if (bookings.some(booking => booking.name.toLowerCase() === name.toLowerCase())) {
      throw new Error('A guest with this name already exists. Please use a different name.');
  }

  const newBooking = {
      name: name,
      startDate: startDate,
      endDate: endDate,
      color: getRandomColor()
  };

  bookings.push(newBooking);
  return newBooking;
}

function updateStay(name, newStartDate, newEndDate) {
  if (!name || !newStartDate || !newEndDate) {
      throw new Error('Please fill in all fields');
  }

  const existingBooking = bookings.find(booking => booking.name.toLowerCase() === name.toLowerCase());
  if (!existingBooking) {
      throw new Error('Guest not found');
  }

  existingBooking.startDate = newStartDate;
  existingBooking.endDate = newEndDate;
  return existingBooking;
}

// Export the functions and data that should be accessible from other files
export {
  bookings,
  days,
  getGuestsForDay,
  bookStay,
  updateStay
};