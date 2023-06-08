//javascript date time intl

const clock = document.querySelector("div");

const updateClock = () => {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
};

updateClock();

const clockInterval = setInterval(updateClock, 1000);
