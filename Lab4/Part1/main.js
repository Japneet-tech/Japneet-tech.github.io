document.addEventListener("DOMContentLoaded", function () {
  const customname = document.getElementById("customname");
  const us = document.getElementById("us");
  const uk = document.getElementById("uk");
  const randomizeButton = document.querySelector(".randomize");
  const storyParagraph = document.querySelector(".story");

  const storyTemplate = "Once upon a time, {name} went to {location}.";
  const usLocations = ["New York", "Los Angeles", "Chicago"];
  const ukLocations = ["London", "Manchester", "Liverpool"];

  function generateRandomStory() {
    const name = customname.value || "Someone";
    const location = us.checked ? getRandomLocation(usLocations) : getRandomLocation(ukLocations);
    const story = storyTemplate.replace("{name}", name).replace("{location}", location);
    storyParagraph.textContent = story;
    storyParagraph.style.visibility = "visible";
  }

  function getRandomLocation(locations) {
    return locations[Math.floor(Math.random() * locations.length)];
  }

  randomizeButton.addEventListener("click", generateRandomStory);
});
