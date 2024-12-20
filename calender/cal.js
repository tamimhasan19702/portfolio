/** @format */

// Selectors
const daysContainer = document.querySelector(".calender-content");
const monthYearDisplay = document.getElementById("monthYearDisplay");
const info = {
  date: document.querySelector(".date h1"),
  occassion: document.querySelector(".date h2"),
  prevBtn: document.querySelector(".date button:nth-of-type(1)"),
  nextBtn: document.querySelector(".date button:nth-of-type(2)"),
};

// Event card selectors
const pastEventDisplay = document.getElementById("pastEvent");
const upcomingEventDisplay = document.getElementById("upcomingEvent");
const eventCard = document.querySelector(".event-card");

// Current Date
let currentDate = new Date();

// Year-long events
const events = {
  0: {
    // January
    1: { name: "New Year's Day", color: "#FF5733" },
  },
  1: {
    // February
    14: { name: "Valentine's Day", color: "#FF33A1" },
  },
  2: {
    // March
    17: { name: "St. Patrick's Day", color: "#33FF57" },
  },
  3: {
    // April
    4: { name: "Independence Day", color: "#3357FF" },
  },
  4: {
    // May
    // Add events for May
  },
  5: {
    // June
    // Add events for June
  },
  6: {
    // July
    // Add events for July
  },
  7: {
    // August
    // Add events for August
  },
  8: {
    // September
    // Add events for September
  },
  9: {
    // October
    31: { name: "Halloween", color: "#FF33F6" },
  },
  10: {
    // November
    // Add events for November
  },
  11: {
    // December
    25: { name: "Christmas", color: "#FF33B5" },
  },
};

// Function to generate the calendar
const generateCalendar = (date) => {
  // Clear previous days
  daysContainer.innerHTML = "";

  // Get the first day of the month and the number of days in the month
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // Update the month and year display
  monthYearDisplay.innerHTML = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Fill in the days
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("calender-day", "disabled");
    daysContainer.appendChild(emptyDiv);
  }

  for (let i = 1; i <= lastDate; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("calender-day");
    dayDiv.innerHTML = i;

    // Add event listener for each day
    dayDiv.addEventListener("click", () => activate(i));

    // Highlight the current day
    if (
      i === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    ) {
      dayDiv.classList.add("current");
    }

    // Check for events and set color
    if (events[date.getMonth()] && events[date.getMonth()][i]) {
      dayDiv.style.backgroundColor = events[date.getMonth()][i].color;
      dayDiv.title = events[date.getMonth()][i].name; // Show event name on hover
    }

    daysContainer.appendChild(dayDiv);
  }

  // Add disabled days for the next month
  const nextMonthDays = 7 - ((lastDate + firstDay) % 7);
  for (let i = 1; i <= nextMonthDays && nextMonthDays > 0; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("calender-day", "disabled");
    emptyDiv.innerHTML = i;
    daysContainer.appendChild(emptyDiv);
  }

  // Update the information display
  changeInfo(currentDate.getDate());
};

// Add Active Class
const activate = (i) => {
  const dayDivs = Array.from(
    document.querySelectorAll(".calender-day:not(.disabled)")
  );
  dayDivs.forEach((d) => d.classList.remove("active"));
  dayDivs[i - 1].classList.add("active");
  changeInfo(i);
};

// Next and Previous
info.prevBtn.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1);
  generateCalendar(currentDate);
});
info.nextBtn.addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1);
  generateCalendar(currentDate);
});

// Change information
const changeInfo = (i) => {
  info.date.innerHTML = i;

  // Check if there is an event for the selected day
  if (events[currentDate.getMonth()] && events[currentDate.getMonth()][i]) {
    eventCard.style.display = "none"; // Hide the event card if there is an event
    info.occassion.innerHTML = `${
      events[currentDate.getMonth()][i].name
    } (Today)`;
  } else {
    eventCard.style.display = "block"; // Show the event card if there is no event
    const pastEvent = events[currentDate.getMonth()][i - 1]
      ? events[currentDate.getMonth()][i - 1].name
      : "No Previous Event";
    const upcomingEvent = events[currentDate.getMonth()][i + 1]
      ? events[currentDate.getMonth()][i + 1].name
      : "No Upcoming Event";

    // Update the event card
    pastEventDisplay.innerHTML = `Past Event: <span>${pastEvent}</span>`;
    upcomingEventDisplay.innerHTML = `Upcoming Event: <span>${upcomingEvent}</span}`;
    info.occassion.innerHTML = `${pastEvent} | ${upcomingEvent}`;
  }
};

// Initial calendar generation
generateCalendar(currentDate);

// Populate the month list
const monthList = document.getElementById("monthList");
const prevYearButton = document.getElementById("prevYear");
const nextYearButton = document.getElementById("nextYear");

// Populate the month dropdown
const populateMonthList = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index; // Month index (0-11)
    option.textContent = month;
    monthList.appendChild(option);
  });

  monthList.value = currentDate.getMonth(); // Set the default to the current month
};

// Event listener for month selection
monthList.addEventListener("change", (event) => {
  currentDate.setMonth(event.target.value);
  generateCalendar(currentDate); // Call your function to generate the calendar
});

// Year Navigation
prevYearButton.addEventListener("click", () => {
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  generateCalendar(currentDate); // Call your function to generate the calendar
});

nextYearButton.addEventListener("click", () => {
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  generateCalendar(currentDate); // Call your function to generate the calendar
});

// Initial population of the month list
populateMonthList();
