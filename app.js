const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const port = 3000;

const server = http.createServer(app);
const io = socketIo(server);

let activeUsers = 0;

io.on('connection', (socket) => {
  activeUsers++;
  console.log('Bir kullanıcı bağlandı. Aktif kullanıcı sayısı:', activeUsers);
  io.emit('activeUsers', activeUsers);
  socket.on('disconnect', () => {
    activeUsers--;
    console.log('Bir kullanıcı ayrıldı. Aktif kullanıcı sayısı:', activeUsers);
    io.emit('activeUsers', activeUsers);
  });
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index'); // index.ejs'yi render et
});

app.get('/pubg-hack', (req, res) => {
  res.render('pages/pubgmobile'); // pubgmobile.ejs'yi render et
});
app.get('/valorant-hack', (req, res) => {
  res.render('pages/valorant'); // pubgmobile.ejs'yi render et
});
app.get('/mblegends-hack', (req, res) => {
  res.render('pages/mobilelegends'); // pubgmobile.ejs'yi render et
});
app.get('/freefire-hack', (req, res) => {
  res.render('pages/freefire'); // pubgmobile.ejs'yi render et
});
app.get('/firefiremax-hack', (req, res) => {
  res.render('pages/firefiremax'); // pubgmobile.ejs'yi render et
});
app.get('/clashroyale-hack', (req, res) => {
  res.render('pages/clashroyale'); // pubgmobile.ejs'yi render et
});
app.get('/clashofclans-hack', (req, res) => {
  res.render('pages/clashofclans'); // pubgmobile.ejs'yi render et
});
app.get('/brawlstars-hack', (req, res) => {
  res.render('pages/brawlstars'); // pubgmobile.ejs'yi render et
});
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});