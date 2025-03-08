interface BoardTask {
  boardId: number;
  title: string;
}

export type BoardTasks = BoardTask[];

export const boardTasks: BoardTasks = [
  {
    boardId: 1,
    title: 'To Do',
  },
  {
    boardId: 2,
    title: 'In Progress',
  },
  {
    boardId: 3,
    title: 'In Review',
  },
  {
    boardId: 4,
    title: 'Done',
  },
];
