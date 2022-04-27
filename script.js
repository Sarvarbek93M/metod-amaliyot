"use script";

const personalnewdb = {
  count: 0,
  new: {},
  actors: {},
  genres: [],
  privat: false,
  startProject: function () {
    personalnewdb.count = +prompt("Siz qancha yangilik kurdingiz ?");
    while (
      personalnewdb.count == "" ||
      personalnewdb.count == null ||
      isNaN(personalnewdb.count)
    ) {
      personalnewdb.count = +prompt("Siz qancha yangilik kurdingiz ?");
    }
  },
  rememberNew: function () {
    for (let i = 0; i < 1; i++) {
      const a = prompt("Oxirgi kurgan yangiliklarizdan biri?"),
        b = prompt("Unga qancha baxo bergan bulardingiz ?");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalnewdb.new[a] = b;
      } else {
        console.log("xatolik");
        i--;
      }
    }
  },
  showpersonallevel: function () {
    if (personalnewdb.count < 10) {
      console.log("Qoniqarsiz");
    } else if (personalnewdb.count >= 10 && personalnewdb.count < 30) {
      console.log("yaxshi");
    } else if (personalnewdb.count >= 30) {
      console.log("Ajoyib");
    } else {
      console.log("Error");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalnewdb);
    }
  },
  togglevisibleMyDb: function () {
    if (personalnewdb.privat) {
      personalnewdb.privat = false;
    } else {
      personalnewdb.privat = true;
    }
  },
  writeyourgenres: function () {
    /* for (let i = 1; i < 2; i++) {
      let genre = prompt(`Sizning sevimli janringiz ${i}`);
      if (genre === "" || genre === null) {
        console.log("Siz notogri malumot kiritdingiz");
        i--;
      } else {
        personalnewdb.genres[i - 1] = genre;
      }
    } */

    for (let i = 1; i < 2; i++) {
      let genre = prompt(
        "Sizning sevimli janringiz, vergul orqali yozing "
      ).toLowerCase();
      if (genre === "" || genre === null) {
        console.log("Siz notogri malumot kiritdingiz");
        i--;
      } else {
        personalnewdb.genres = genre.split(", ");
        personalnewdb.genres.sort();
      }
    }

    personalnewdb.genres.forEach((item, i) => {
      console.log(`Sizning sevimli janringiz nomer ${i + 1} bu ${item}`);
    });
  },
};
