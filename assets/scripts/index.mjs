import {reusable, toggleMenu, card, slider} from "./home.mjs";

document.addEventListener('DOMContentLoaded', async () => {
  await reusable();
  card();
  slider();
  toggleMenu();
});