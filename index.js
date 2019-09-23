const User = require('./data/models/User');
const Project = require('./data/models/Project');

Project.belongsTo(User);
User.hasMany(Project, {
  foreignKey: 'userId',
  as: 'projects',
});

(async () => {
  const users = await User.findAll({
    include: [
      {
        model: Project,
        as: 'projects',
      },
    ],
    attributes: ['id', 'data', 'projects.id', 'projects.data']
  });
  console.info('Result:', JSON.stringify(users));
  console.info('typeof users[0].data', typeof users[0].data);
  console.info('typeof users[0].projects[0].data', typeof users[0].projects[0].data);
})();
