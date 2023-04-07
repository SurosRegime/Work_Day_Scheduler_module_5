
// Get current day and display at the top of the calendar
const currentDay = dayjs().format("dddd, MMMM D, YYYY");
document.getElementById("currentDay").textContent = currentDay;

// Define business hours time blocks
const businessHours = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

// Display time blocks for current day
const currentHour = dayjs().hour();
// const planner = document.getElementById("planner");
for (let i = 0; i < businessHours.length; i++) {
  const hour = dayjs(businessHours[i], "hA").hour();
  const timeBlock = document.createElement("div");
  timeBlock.classList.add("time-block");

  // Color code time block based on past, present, or future
  if (hour < currentHour) {
    timeBlock.classList.add("past");
  } else if (hour === currentHour) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
  }

  // Create event input and save button
  const eventInput = document.createElement("textarea");
  eventInput.setAttribute("placeholder", "Enter Event");
  eventInput.classList.add("event-input");

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.classList.add("save-button");

  // Load saved event from local storage
  const savedEvent = localStorage.getItem(businessHours[i]);
  if (savedEvent) {
    eventInput.value = savedEvent;
  }

  // Save event to local storage on button click
  saveBtn.addEventListener("click", () => {
    localStorage.setItem(businessHours[i], eventInput.value);
  });

  // Add event input and save button to time block
  timeBlock.appendChild(eventInput);
  timeBlock.appendChild(saveBtn);

  // Add time block to planner
 // planner.appendChild(timeBlock);
}
