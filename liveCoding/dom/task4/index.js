export function getTitle() {
  const content = document.querySelector(".title").textContent;
  return content;
}
console.log(getTitle());

export function getDescription() {
  const aboutContent = document.querySelector(".about").innerText;
  return aboutContent;
}

console.log(getDescription());

export function getPlans() {
  const plans = document.querySelector(".plans").innerHTML;
  return plans;
}
console.log(getPlans());

export function getGoal() {
  const goal = document.querySelector(".goal").outerHTML;
  return goal;
}
console.log(getGoal());
