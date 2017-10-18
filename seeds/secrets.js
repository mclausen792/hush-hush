exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('secrets').del()
    .then(function() {
      // Inserts seed entries
      return knex('secrets').insert([{
          id: 1,
          secrets: 'Makayla loves hot wings'
        },
        {
          id: 2,
          secrets: 'Beth loves french fries'
        },
        {
          id: 3,
          secrets: 'We love puzzles and wine'
        }
      ]);
    });
};
