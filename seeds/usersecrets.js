exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersecrets').del()
    .then(function() {
      // Inserts seed entries
      return knex('usersecrets').insert([{
          id: 1,
          user_id: 1,
          secret_id: 1
        },
        {
          id: 2,
          user_id: 2,
          secret_id: 2
        },
        {
          id: 3,
          user_id: 2,
          secret_id: 3
        },
        {
          id: 4,
          user_id: 1,
          secret_id: 3
        }
      ]);
    });
};
