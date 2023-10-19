import { URL, OPTIONS } from "../js/config.js";

export const state = {};
export const loadMusic = async function () {
  try {
    const response = await fetch(`${URL}`, OPTIONS);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
