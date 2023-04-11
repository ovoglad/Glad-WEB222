window.onload = function () {
  const reasonRadioButtons = document.getElementsByName("reason");
  const hourlyRateInput = document.getElementById("hourly-rate");

  reasonRadioButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "hiring") {
        hourlyRateInput.classList.remove("hidden");
        hourlyRateInput.querySelector("input").setAttribute("required", "");
      } else {
        hourlyRateInput.classList.add("hidden");
        hourlyRateInput.querySelector("input").removeAttribute("required");
      }
    });
  });
};
