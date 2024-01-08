const RangeHandler = {
  initRangeHandler: (fieldID, rangeID, ticksClass, tickIncrement, tickFormatter, inputFormatter, rangeFormatter, setValue) => {
    const field = document.getElementById(fieldID);
    const range = document.getElementById(rangeID);
    const ticks = document.querySelector(ticksClass);

    // Clear existing ticks before creating new ones
    ticks.innerHTML = "";

    field.addEventListener("input", () => {
      setValue(rangeFormatter(field.value));
    });

    range.addEventListener("input", () => {
      setValue(inputFormatter(range.value));
    });

    for (let i = parseFloat(range.min); i <= parseFloat(range.max); i += tickIncrement) {
      const tick = document.createElement("p");
      tick.textContent = tickFormatter(i);
      ticks.appendChild(tick);
    }
  },
};

export default RangeHandler;
