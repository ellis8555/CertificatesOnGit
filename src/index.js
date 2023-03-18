import "./main.scss";
import * as bootstrap from "bootstrap";
<<<<<<< HEAD
import { components } from "./components/allElements";
import { setNavBarScrollFade, appendElements } from "./utilities/allEffects";
=======
import { components } from "./components/elements";
import { appendElements } from "./utilities/routes/elementsAppend";
import { setNavBarScrollFade } from "./utilities/effects/allEffects";
>>>>>>> a85341f94f488992c3e9c9a47e526870fbdc1974

// the root div in index.html for content to be injected
const root = document.getElementById("root");

// method loops through components array and appends each item to root div
appendElements(root, ...components);

// apply listeners

setNavBarScrollFade();
