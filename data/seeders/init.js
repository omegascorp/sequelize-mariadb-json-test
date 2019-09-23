const users = [{
  id: 1,
  data: '{"name": "User 1"}',
  createdAt: new Date(),
  updatedAt: new Date(),
}];

const projects = [{
  userId: 1,
  data: '{"projectName": "Project 1"}',
  createdAt: new Date(),
  updatedAt: new Date(),
}];

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('User', users);
    await queryInterface.bulkInsert('Project', projects);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('User', null, {});
    await queryInterface.bulkDelete('Project', null, {});
  },
};
