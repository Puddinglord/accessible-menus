Hooks.on("ready", function () {
  console.log("Enhanced accessibility options eanbled... Lift off 🚀");

  window.addEventListener("keydown", keyDown);
});

function keyDown(event) {
  switch (event.keyCode) {
    case 67:
      ui.sidebar.activateTab("chat");
      break;
    case 84:
      ui.sidebar.activateTab("combat");
      break;
    case 83:
      ui.sidebar.activateTab("settings");
      break;
    case 65:
      ui.sidebar.activateTab("actors");
      break;
    case 73:
      ui.sidebar.activateTab("items");
      break;
    case 74:
      ui.sidebar.activateTab("journal");
      break;
    case 82:
      ui.sidebar.activateTab("tables");
      break;
    case 77:
      ui.sidebar.activateTab("playlists");
      break;
    case 80:
      ui.sidebar.activateTab("compendium");
      break;
  }
}
