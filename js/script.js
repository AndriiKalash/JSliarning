"use strict";

let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert(' маловато фильмов ');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('вы киноман');
    } else {
        alert("произошла ошибка");
    }
}

// detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("один из последних просмотренных фильмов ?", ""),
            b = prompt("на сколько оцените его ?", "");
        if (a != null && a != '' && a.length < 50 && b != null && b != '') {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }
}
// rememberMyFilms();

function showMyDB(hiden) {
    if (!hiden) {
        console.log(personalMovieDB);
    }

}
// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
// writeYourGenres();

// ------------------



