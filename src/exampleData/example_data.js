const fakeUsers = [
    {
        username: "Jeremias",
        password:"user",
        active: false,
        logged: false,
        deletionConfirm: true,
        role: "regular",
    },
    {
        username: "Karla",
        active: false,
        logged: false,
        deletionConfirm: true,
        role: "regular",
    },
    {
        username: "Abril",
        password: "abril",
        active: false,
        logged: false,
        deletionConfirm: true,
        role: "regular",
    },
    {
        username: "Admin",
        password:"admin",
        active: false,
        logged: false,
        deletionConfirm: true,
        role: "admin",
    },
];

const fakeTasks = [
    { name: "task one", user: "Jeremias", done: false, id: 1 },
    { name: "task two", user: "Karla", done: false, id: 2 },
    { name: "task three", user: "Jeremias", done: true, id: 3 },
    { name: "task four", user: "Abril", done: false, id: 4 },
    { name: "task five", user: "Jeremias", done: false, id: 5 },
    { name: "task six", user: "Karla", done: false, id: 6 },
    { name: "task seven", user: "Jeremias", done: false, id: 7 },
    { name: "task eigth", user: "Abril", done: false, id: 8 },
]

export {fakeUsers, fakeTasks};