/* eslint-disable consistent-return */
const fs = require('fs');
const jsonServer = require('json-server');
// const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// Нужно для небольшой задержки, что бы запрос приходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// проверяем, авторизирован ли пользователь
server.use(async (req, res, next) => {
    console.log('req.headers.authorization =', req.headers.authorization);
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'ERROR HEADER' });
    }
    console.log('next');
    next();
});

// Эндпоинт  для логина
server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
    console.log('start login', req.body);
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;
    console.log('username, password');

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
        return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

server.use(jsonServer.defaults());
server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
