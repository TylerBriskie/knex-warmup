
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM language; ALTER SEQUENCE language_id_seq RESTART WITH 6')
    .then(function () {
      const languages = [
        {
          id: 1,
          user_id:2,
          name: "Python",
          skill_level: 7,
          date_learned: "2007-01-17"
        },
        {
          id: 2,
          user_id:1,
          name: "Ruby",
          skill_level: 10,
          date_learned: "2012-11-23"
        },
        {
          id: 3,
          user_id:2,
          name: "Javascript",
          skill_level: 3,
          date_learned: "2010-04-07"
        },
        {
          id: 4,
          user_id:1,
          name: "C++",
          skill_level: 7,
          date_learned: "2002-05-29"
        },
        {
          id: 5,
          user_id:1,
          name: "Angular",
          skill_level: 7,
          date_learned: "2015-08-10"
        },
      ]
      return knex('language').insert(languages);
    });
};
