import { v4 as uuidv4 } from 'uuid';

const todoList = [
    {
        id: uuidv4(),
        title: "First Task",
        content: "This is the first task",
        priority: 1,
        status: "Not Started",
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
    },
    {
        id: uuidv4(),
        title: "Second Task",
        content: "This is the second task",
        priority: 2,
        status: "Done",
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
    },
    {
        id: uuidv4(),
        title: "Third Task",
        content: "This is the third task",
        priority: 3,
        status: "Failed",
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
    },
    {
        id: uuidv4(),
        title: "Fourth Task",
        content: "This is the fourth task",
        priority: 4,
        status: "In Progress",
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
    },
    {
        id: uuidv4(),
        title: "Fifth Task",
        content: "This is the fifth task",
        priority: 5,
        status: "In Progress",
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
    }
]


export default todoList;