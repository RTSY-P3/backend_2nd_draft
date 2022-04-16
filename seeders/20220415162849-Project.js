// 'use strict';
// const { User, sequelize } = require('../models')
// const falso = require('@ngneat/falso')


// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const projects = await Promise.all(
//       [...Array(200)].map(async () => {
//         let user = await User.findOne({ order: sequelize.random(), raw: true })
      
//         return {
//           title: 'banana',
//           body: 'apple',
//           image: 'hjnk',
//           user_id: 1,
//           createdAt: '2021-05-06 11:25:57.867-04',
//           updatedAt: '2021-05-06 11:25:57.867-04'
//         }
//       })
//     )
//     return queryInterface.bulkInsert('projects', projects)
//   },

//   down: async (queryInterface, Sequelize) => {
//   return queryInterface.bulkDelete('projects')
//   }
// };
