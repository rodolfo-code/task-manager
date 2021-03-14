const mockTasks = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Star Wars',
    description: 'Fiction',
    status: 'Completed',
  },
];

function tasks(state = { tasks: mockTasks }, action) {
  return state;
}

export default tasks;
