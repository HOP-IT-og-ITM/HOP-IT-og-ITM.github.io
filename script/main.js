import { MainScreen } from './mainscreen.js';
function visSkjerm(skjerm) {
    switch (skjerm) {
        case "login":
            new MainScreen().render();
            break;
        default:
            new MainScreen().render();
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const skjerm = localStorage.getItem("skjerm");
    if (skjerm) {
        window.history.replaceState({ skjerm }, "", "");
        visSkjerm(skjerm);
    }
    else {
        visSkjerm("login");
    }
});
window.addEventListener("popstate", (e) => {
    const skjerm = e.state?.skjerm || "login";
    localStorage.setItem("skjerm", skjerm);
    visSkjerm(skjerm);
});
