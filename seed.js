const db = require ("./server/db");
//const {Campus, Course, Event, Student } = require ("./server/db/models");
const Campus = require("./server/db/models/campus");
const Student = require("./server/db/models/student");
Student.belongsTo(Campus);
Campus.hasMany(Student);
const campuses = [
    {name: 'Jenna',
    description: 'Helping Students All around the earth',
    imageUrl: '/img/earth.jpg'},
    {name: 'Laura',
    description: "I love to help people",
    imageUrl: '/img/moon.jpg'}
];

const students = [
    { firstName: 'Suyash',
      lastName: 'Chopra',
      email: 'suyash@gmail.com',
      campusId: 1
    },
    { firstName: 'John',
    lastName: 'English',
    email: 'john@gmail.com',
    campusId: 1
    },
    { firstName: 'Distant',
    lastName: 'Student',
    email: 'dstudent@gmail.com',
    campusId: 2
    },
    { firstName: 'Anakin',
    lastName: 'Skywalker',
    email: 'darthvader@gmail.com',
    campusId: 2
    }
];

const seed = () => {
    const campusPromise = campuses.map(campus => Campus.create(campus));
    const studentPromise = students.map(student => Student.create(student))
    return Promise.all (campusPromise).then( () => Promise.all(studentPromise)).catch(errFunc) ;
}
 
const errFunc = (err) =>  {
    console.log('Error while seeding');
    console.log(err.stack);
  }

const main = () => {
    console.log('Syncing db...');
    db.sync({ force: true })
      .then(() => {
        console.log('Seeding databse...');
        return seed();
      })
      .catch(errFunc)
      .then(() => {
        db.close();
        return null;
      });
  };
  
  main();
  