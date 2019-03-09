const Table = require('cli-table');

const tip = require('./tip');

const table = new Table({
  head: ['name', 'description',],
  style: {
    head: ['cyan']
  }
});

module.exports = (config) => {
  const keys = Object.keys(config);

  if(keys.length) {
    keys.forEach((key) => {
      table.push(
        [`${key}`, config[key].description]
      );
    });

    const list = table.toString();

    if (list) {
      tip.info('模板列表: ')
      console.log(`${list}\n`);
    } else {
      tip.fail('暂无任何模板信息!');
    }
  } else {
    tip.fail('暂无任何模板信息!');
  }
};
