const digitalClock = document.getElementById("digital-clock");
const toggleFormatBtn = document.getElementById("toggle-format");
const colorPicker = document.getElementById("color-picker");
const fontSizeInput = document.getElementById("font-size");
const applySettingsBtn = document.getElementById("apply-settings");
const alarmTimeInput = document.getElementById("alarm-time");
const setAlarmBtn = document.getElementById("set-alarm");
const alarmStatus = document.getElementById("alarm-status");

let is24Hour = false;
let alarmTime = null;

// Load preferences from localStorage
const loadPreferences = () => {
    const savedColor = localStorage.getItem("clockColor");
    const savedFontSize = localStorage.getItem("clockFontSize");
    const savedAlarm = localStorage.getItem("alarmTime");

    if (savedColor) {
        digitalClock.style.color = savedColor;
        colorPicker.value = savedColor;
    }
    if (savedFontSize) {
        digitalClock.style.fontSize = `${savedFontSize}px`;
        fontSizeInput.value = savedFontSize;
    }
    if (savedAlarm) {
        alarmTime = savedAlarm;
        alarmStatus.textContent = `Alarm set for ${alarmTime}`;
    }
};

// Update the clock
const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    if (!is24Hour) {
        const amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        digitalClock.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
    } else {
        digitalClock.textContent = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
    }

    // Check if it's time to trigger the alarm
    const currentTime = `${String(hours).padStart(2, "0")}:${minutes}`;
    if (alarmTime && currentTime === alarmTime) {
        alert("Alarm ringing!");
        alarmTime = null;
        localStorage.removeItem("alarmTime");
        alarmStatus.textContent = "No alarm set";
    }
};

// Toggle between 12-hour and 24-hour formats
toggleFormatBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    toggleFormatBtn.textContent = is24Hour ? "Switch to 12-hour" : "Switch to 24-hour";
    updateClock();
});

// Apply clock color and font size settings
applySettingsBtn.addEventListener("click", () => {
    const color = colorPicker.value;
    const fontSize = fontSizeInput.value;

    if (color) {
        digitalClock.style.color = color;
        localStorage.setItem("clockColor", color);
    }
    if (fontSize) {
        digitalClock.style.fontSize = `${fontSize}px`;
        localStorage.setItem("clockFontSize", fontSize);
    }
});

// Set an alarm
setAlarmBtn.addEventListener("click", () => {
    if (alarmTimeInput.value) {
        alarmTime = alarmTimeInput.value;
        localStorage.setItem("alarmTime", alarmTime);
        alarmStatus.textContent = `Alarm set for ${alarmTime}`;
    } else {
        alert("Please enter a valid time for the alarm.");
    }
});

// Initialize clock and preferences
loadPreferences();
setInterval(updateClock, 1000);
updateClock();
