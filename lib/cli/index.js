const program = require('commander');
const packageInfo = require('../../package.json');

program
    .version(packageInfo.version);

program
    .command('init') // init
    .description('生成一个项目')
    .alias('i')
    .action(() => {
        require('../cmd/init')();
    });

program
    .command('add') // add
    .description('添加新模板')
    .alias('a')
    .action(() => {
        require('../cmd/add')();
    });

program
    .command('list') // list
    .description('查看模板列表')
    .alias('l')
    .action(() => {
        require('../cmd/list')();
    });

program
    .command('delete')
    .description('删除模板')
    .alias('d')
    .action(() => {
        require('../cmd/delete')();
    });

program.parse(process.argv);

if (!program.args.length) {
    program.help();
}

