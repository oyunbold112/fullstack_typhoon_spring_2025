// visits
let numberOfVisits = localStorage.getItem('visits');

if (numberOfVisits == null) {
    numberOfVisits = 0;
} else {
    numberOfVisits = parseInt(numberOfVisits, 10);
}

console.log(numberOfVisits)

let visits = document.getElementById('visits');
visits.innerHTML = numberOfVisits;

// add by one visit numbers
numberOfVisits++;

localStorage.setItem('visits', numberOfVisits);

// student
let student = localStorage.getItem('student')
if (student == null) {
    student = 'Oyunbold'
} else {
    student = student;
}
localStorage.setItem('student', student);

// show student name to the DOM on the HTML
let studentEl = document.getElementById('student')
studentEl.innerHTML = student


// animal
let animal = localStorage.getItem('animal')
if (animal == null) {
    animal = 'Dog'
} else {
    animal = animal
}
localStorage.setItem('animal', animal);
let animalEl = document.getElementById('animal')
animalEl.innerHTML = animal
// hobbies
let hobbies = localStorage.getItem('hobbies')
if (hobbies == null) {
    hobbies = 'Football, Video games'
} else {
    hobbies = hobbies
}
localStorage.setItem('hobbies', hobbies);
let hobbiesEl = document.getElementById('hobbies')
hobbiesEl.innerHTML = hobbies
// activities
let activities = localStorage.getItem('activities')
if (activities == null) {
    activities = 'laundry'
} else {
    activities = activities
}
localStorage.setItem('activities', activities);
let activitiesEl = document.getElementById('activity')
activitiesEl.innerHTML = activities

