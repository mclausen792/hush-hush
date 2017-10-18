exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
          id: 1,
          email: 'makayla@email.com',
          code: '1234'
        },
        {
          id: 2,
          email: 'beth@email.com',
          code: '5678'
        }
      ]);
    });
};
