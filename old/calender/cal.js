/** @format */

// Selectors
const daysContainer = document.querySelector(".calender-content");
const monthYearDisplay = document.getElementById("monthYearDisplay");
const info = {
  date: document.querySelector(".date h1"),
  occassion: document.querySelector(".date h2"),
  description: document.querySelector(".date p"), // New selector for description
  prevBtn: document.querySelector(".date button.previous"),
  nextBtn: document.querySelector(".date button.next"),
};

// Current Date
let currentDate = new Date();

// Year-long events with descriptions
const events = {
  0: {
    // January
    1: {
      name: "New Year's Day",
      color: "#FF5733",
      description: "Celebrate the start of the new year!",
    },
    15: {
      name: "Martin Luther King Jr. Day",
      color: "#FFD700",
      description: "A day to honor the life and work of Martin Luther King Jr.",
    },
  },
  1: {
    // February
    14: {
      name: "Valentine's Day",
      color: "#FF33A1",
      description: "A day to celebrate love and affection.",
    },
    15: {
      name: "Chinese New Year",
      color: "#FF33F6",
      description:
        "A celebration marking the beginning of the new year on the traditional Chinese calendar.",
    },
  },
  2: {
    // March
    17: {
      name: "St. Patrick's Day",
      color: "#33FF57",
      description:
        "A cultural and religious celebration held on the anniversary of Saint Patrick's death.",
    },
    20: {
      name: "International Day of Happiness",
      color: "#FFD700",
      description: "A day to celebrate and promote happiness and well-being.",
    },
  },
  3: {
    // April
    1: {
      name: "April Fool's Day",
      color: "#FF33A1",
      description: "A day to play pranks and jokes on others.",
    },
    4: {
      name: "Independence Day",
      color: "#3357FF",
      description: "Celebrate the independence of our nation.",
    },
    15: {
      name: "Tax Day",
      color: "#FF33F6",
      description: "The last day to file taxes in the United States.",
    },
  },
  4: {
    // May
    1: {
      name: "May Day",
      color: "#FFD700",
      description: "A celebration of spring and labor.",
    },
    5: {
      name: "Cinco de Mayo",
      color: "#FF33A1",
      description: "A celebration of Mexican culture and independence.",
    },
    12: {
      name: "Mother's Day",
      color: "#FF33F6",
      description: "A day to celebrate mothers and motherhood.",
    },
    25: {
      name: "Memorial Day",
      color: "#3357FF",
      description:
        "A day to honor and remember those who have died in military service.",
    },
  },
  5: {
    // June
    1: {
      name: "Pride Month",
      color: "#FF33F6",
      description:
        "A month to celebrate and promote LGBTQ+ rights and awareness.",
    },
    14: {
      name: "Flag Day",
      color: "#FFD700",
      description: "A day to celebrate the adoption of the United States flag.",
    },
    15: {
      name: "Father's Day",
      color: "#FF33A1",
      description: "A day to celebrate fathers and fatherhood.",
    },
  },
  6: {
    // July
    4: {
      name: "Independence Day",
      color: "#3357FF",
      description: "Celebrate the independence of our nation.",
    },
    28: {
      name: "World Hepatitis Day",
      color: "#FF33F6",
      description: "A day to raise awareness about hepatitis.",
    },
  },
  7: {
    // August
    12: {
      name: "World Elephant Day",
      color: "#FFD700",
      description: "A day to raise awareness about elephant conservation.",
    },
    26: {
      name: "Women's Equality Day",
      color: "#FF33A1",
      description: "A day to celebrate the passage of the 19th Amendment.",
    },
  },
  8: {
    // September
    1: {
      name: "Labor Day",
      color: "#FF33F6",
      description: "A day to celebrate workers and their achievements.",
    },
    22: {
      name: "Autumnal Equinox",
      color: "#FFD700",
      description: "The day the sun crosses the celestial equator.",
    },
  },
  9: {
    // October
    31: {
      name: "Halloween",
      color: "#FF33F6",
      description: "A celebration involving costumes and trick-or-treating.",
    },
  },
  10: {
    // November
    1: {
      name: "All Saints' Day",
      color: "#FF33A1",
      description: "A day to honor all Christian saints and martyrs.",
    },
    11: {
      name: "Veterans Day",
      color: "#3357FF",
      description:
        "A day to honor and remember those who have served in the military.",
    },
    26: {
      name: "Thanksgiving Day",
      color: "#FFD700",
      description: "A day to celebrate and give thanks for the harvest.",
    },
  },
  11: {
    // December
    25: {
      name: "Christmas",
      color: "#FF33B5",
      description: "A holiday celebrating the birth of Jesus Christ.",
    },
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
    const event = events[currentDate.getMonth()][i];
    info.occassion.innerHTML = `${event.name} (Today)`;
    info.description.innerHTML = event.description; // Display the event description
  } else {
    info.occassion.innerHTML = ""; // Clear occasion text
    info.description.innerHTML = ""; // Clear description text
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
