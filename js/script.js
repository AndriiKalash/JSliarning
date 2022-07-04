"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // privat: true,
    start: function (value) {
        value = +prompt("Сколько фильмов вы уже посмотрели ?", "");
        while (value == '' || value == null || isNaN(value)) {
            value = +prompt("Сколько фильмов вы уже посмотрели ?", "");
        }
        personalMovieDB.count = value;
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert(' маловато фильмов ');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('вы класический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('вы киноман');
        } else {
            alert("произошла ошибка");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            // .trim() - убирает пробелы(если только пробелы в строке)
            const a = prompt("один из последних просмотренных фильмов ?", "").trim(),
                b = prompt("на сколько оцените его ?", "");
            if (a != null && a != '' && a.length < 50 && b != null && b != '') {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }

        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            if (genre != null && genre != '') {
                personalMovieDB.genres[i - 1] = genre;
                personalMovieDB.genres.sort();


            } else {
                console.log('вы ввели некоректные данные');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`любимый жанр № ${i + 1} - это ${item} `);
        });
    },

    toggleVisibleMyDb: function (callback) {
        personalMovieDB.privat = (personalMovieDB.privat) ? false : true;
        callback();

    },

    showMyDB: function (privat) {
        if (!privat) {
            console.log(this);
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDb(personalMovieDB.showMyDB);
personalMovieDB.showMyDB(personalMovieDB.privat);

console.log(personalMovieDB.privat);
// ------------------



