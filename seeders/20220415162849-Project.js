'use strict';

module.exports = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('projects', [
        {
            title: 'The Sunset Limited',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            user_id: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Fargo',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://m.media-amazon.com/images/M/MV5BNDJiZDgyZjctYmRjMS00ZjdkLTkwMTEtNGU1NDg3NDQ0Yzk1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
            user_id: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Reservoir Dogs',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            user_id: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Everything, Everywhere All At Once',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://i0.wp.com/www.thecosmiccircus.com/wp-content/uploads/2022/04/Screenshot_20220409_140938.jpg?fit=1195%2C591&ssl=1',
            user_id: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'The Matrix',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            user_id: 7,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Evil Dead',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://img.moviepostershop.com/the-evil-dead-movie-poster-1983-1020292502.jpg',
            user_id: 8,
            createdAt: new Date(),
            updatedAt: new Date()
        },   {
            title: 'Texas Chainsaw Massacre',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            user_id: 9,
            createdAt: new Date(),
            updatedAt: new Date()
        },   {
            title: 'Hackers',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://www.moviemem.com/wp-content/uploads/2021/12/HACKERSSuperHRws.jpg',
            user_id: 10,
            createdAt: new Date(),
            updatedAt: new Date()
        },   {
            title: 'The Matrix Reloaded',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
            user_id: 11,
            createdAt: new Date(),
            updatedAt: new Date()
        },   {
            title: 'The Matrix Revolutions',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
            user_id: 12,
            createdAt: new Date(),
            updatedAt: new Date()
        },   {
            title: 'King Richard',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://pics.filmaffinity.com/King_Richard-738644259-large.jpg',
            user_id: 13,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'No Country For Old Men',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_FMjpg_UX1000_.jpg',
            user_id: 14,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            title: 'Beetlejuice',
            body: 'Through a chance encounter, two men of opposing ideologies deliberate spiritual, philosophical, and profound matters in a New York City apartment.',
            image: 'https://m.media-amazon.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            user_id: 15,
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ])
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects')
    }
}