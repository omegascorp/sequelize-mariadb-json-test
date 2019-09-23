const query = `
  CREATE SCHEMA IF NOT EXISTS \`test\` DEFAULT CHARACTER SET utf8;
  USE \`test\` ;

  CREATE TABLE IF NOT EXISTS \`test\`.\`User\` (
    \`id\` INT(11) NOT NULL AUTO_INCREMENT,
    \`data\` JSON NOT NUll,
    \`createdAt\` DATETIME NOT NULL,
    \`updatedAt\` DATETIME NOT NULL,
    PRIMARY KEY (\`id\`))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8;

  CREATE TABLE IF NOT EXISTS \`test\`.\`Project\` (
    \`id\` INT(11) NOT NULL AUTO_INCREMENT,
    \`userId\` INT(11) NOT NULL,
    \`data\` JSON NOT NUll,
    \`createdAt\` DATETIME NOT NULL,
    \`updatedAt\` DATETIME NOT NULL,
    PRIMARY KEY (\`id\`))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8;
`;

module.exports = {
  up: queryInterface => queryInterface.sequelize.query(query),
  down: _ => Promise.resolve(true),
};
