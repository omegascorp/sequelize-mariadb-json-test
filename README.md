# It's en experiment that shows reads JSON fields from MariaDB via Sequelize

## Init

```
yarn && yarn db-init
```

## Run

```
docker-compose up
```

```
yarn start
```

## Issue description

There are 2 models defined Users and Projects. User has many projects and they are associated via userId filed.

```
User {
  id: INTEGER;
  data: JSON;
}

Project {
  id: INTEGER;
  userId: INTEGER;
  data: JSON;
}
```

In case you are selecting users and include projects user.data type is object, but project.data type is string. 

```
const users = await User.findAll({
  include: [
    {
      model: Project,
      as: 'projects',
    },
  ],
  attributes: ['id', 'data', 'projects.id', 'projects.data'],
});

console.info(typeof users[0].data); // object
console.info(typeof users[0].projects[0].data); // string
```
