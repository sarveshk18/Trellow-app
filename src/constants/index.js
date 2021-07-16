import { TaskStatus } from "../enum";

export const TASKS = [
  {
    id: 1,
    name: "task1",
    status: TaskStatus.RESOURCE.id,
    priority: 1
  },
  {
    id: 2,
    name: "task2",
    status: TaskStatus.RESOURCE.id,
    priority: 2
  },
  {
    id: 3,
    name: "task3",
    status: TaskStatus.RESOURCE.id,
    priority: 3
  },
  {
    id: 4,
    name: "task4",
    status: TaskStatus.TO_DO.id,
    priority: 1
  },
  {
    id: 5,
    name: "task5",
    status: TaskStatus.TO_DO.id,
    priority: 2
  },
  {
    id: 6,
    name: "task6",
    status: TaskStatus.DOING.id,
    priority: 1
  },
  {
    id: 7,
    name: "task7",
    status: TaskStatus.DOING.id,
    priority: 2
  },
  {
    id: 8,
    name: "task8",
    status: TaskStatus.DONE.id,
    priority: 1
  },
  {
    id: 9,
    name: "task9",
    status: TaskStatus.DONE.id,
    priority: 2
  }
];
