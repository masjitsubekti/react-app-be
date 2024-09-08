
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name:'Muhammad Alkautsar',
          username: 'superadmin', 
          email: 'superadmin@gmail.com',
          password:'$2b$10$IJaHghfmcZqzoUxU8lG0Nee1DVTxIK4MFFWO3eD3gH4RS4x9G6zyO',
          status:'1',
          created_at :knex.fn.now()
        },
      ]);
    });
};
