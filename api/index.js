//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn,Diet } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    const glutenFree=Diet.findOrCreate({
      where:{
        name:'gluten free'
      },
    });

    const ketogenic=Diet.findOrCreate({
      where:{
        name:'ketogenic'
      },
    });

    const vegetarian=Diet.findOrCreate({
      where:{
        name:'vegetarian'
      },
    });

    const lactoVegetarian=Diet.findOrCreate({
      where:{
        name:'lacto vegetarian'
      },
    });

    const ovoVegetarian=Diet.findOrCreate({
      where:{
        name:'ovo vegetarian'
      },
    });

    const vegan=Diet.findOrCreate({
      where:{
        name:'vegan'
      },
    });

    const pescetarian=Diet.findOrCreate({
      where:{
        name:'pescatarian'
      },
    });

    const paleo=Diet.findOrCreate({
      where:{
        name:'paleolithic'
      },
    });

    const primal=Diet.findOrCreate({
      where:{
        name:'primal'
      },
    });

    const whole=Diet.findOrCreate({
      where:{
        name:'whole 30'
      }
    });

    Promise.all([
      glutenFree,
      ketogenic,
      vegetarian,
      lactoVegetarian,
      ovoVegetarian,
      vegan,
      pescetarian,
      paleo,
      primal,
      whole
    ]).then(()=>{
      console.log('Types loaded')
    })

  });
});
