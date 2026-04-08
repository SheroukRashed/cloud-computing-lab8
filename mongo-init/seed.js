db = db.getSiblingDB('lab8');
db.tasks.drop();
db.tasks.insertMany([
  { id: 1, name: 'Buy groceries',   status: 'done'    },
  { id: 2, name: 'Walk the dog',    status: 'pending' },
  { id: 3, name: 'Read a book',     status: 'done'    },
  { id: 4, name: 'Write report',    status: 'pending' },
  { id: 5, name: 'Clean the house', status: 'done'    },
  { id: 6, name: 'Cook dinner',     status: 'pending' }
]);
print('Seed data inserted successfully');

