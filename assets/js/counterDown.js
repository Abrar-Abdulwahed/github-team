function randomDate(start, end) {
    return new Date(+start + Math.random() * (end - start));
}

var randomDateVar, distance;
const second = 1000;
const minutes = second * 60;
const hours = minutes * 60;
const days = hours * 24;
const now = new Date().getTime();

const getDistance =(randDate)=>{
    return randDate - now;
}
const getRemainDays = (distance)=>{
    return Math.floor(distance / days);
}
const getRemainHours = (distance)=>{
    return Math.floor((distance % days) / hours);
}
const getRemainMinutes = (distance)=>{
    return Math.floor((distance % hours) / minutes);
}
const getRemainSeconds = (distance)=>{
    return Math.floor((distance % minutes) / second);
}
const countDownFunc = (distance)=> {
    var cardItmes = document.querySelectorAll('.offer-section .card-item');
    for(let i=0; i < cardItmes.length; i++){
        randomDateVar = randomDate(new Date().getTime(), new Date(2022, 11, 20));
        distance = getDistance(randomDateVar);
        // cardItmes[i].innerHTML = getRemainDays(distance);
        // cardItmes[i].innerHTML = getRemainHours(distance);
        // cardItmes[i].innerHTML = getRemainMinutes(distance);
        // cardItmes[i].innerHTML = getRemainSeconds(distance);
        cardItmes[i].querySelector('.offer-left b').innerHTML = getRemainDays(distance);
    }
}
countDownFunc();