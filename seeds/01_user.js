
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM users; ALTER SEQUENCE users_id_seq RESTART WITH 3')
    .then(function () {
      const users = [{
        id:1,
        email: 'XxH4CK3RB01xX@aol.com',
        password:'password123',
        bio:'I\'m Joey, I like to hack the mainframe'
      },
      {
        id:2,
        email: 'admin@google.com',
        password:'secret',
        bio:'Head of security at Google.  I like to keep my mainframe safe from hackers.'
      }]
      return knex('users').insert(users);
    });
};
