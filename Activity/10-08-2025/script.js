const data = {
  currentColor: "pink",
  colors: ["pink", "red", "yellow"],
};

const methods = {
  createButton(color) {
    const button = document.createElement("button");
    button.id = color;
    button.textContent = color;
    button.type = "button";
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => this.handleClick(color));

    return button;
  },

  handleClick(color) {
    data.currentColor = color;
    this.setBackground(color);
    this.updateButtons(color);
  },

  setBackground(color) {
    document.body.style.backgroundColor = color;
  },

  updateButtons(activeColor) {
    const buttons = document.querySelectorAll("#controls button");
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.id === activeColor));
    });
  },

  renderButtons(container) {
    data.colors.forEach((color) => {
      const button = this.createButton(color);
      container.appendChild(button);
    });
  },

  init() {
    const controls = document.querySelector("#controls");

    this.renderButtons(controls);

    this.handleClick(data.currentColor);
  },
};

methods.init();
