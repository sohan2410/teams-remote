module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Subham',
          email: 'subham@mail.com',
          mobile: '9087654311',
          password: 'sk123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Soumya',
          email: 'soumya@hotmail.com',
          mobile: '8094581110',
          password: 'sr123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Madhu',
          email: 'madhu@abc.in',
          mobile: '9086730103',
          password: 'm123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
}
