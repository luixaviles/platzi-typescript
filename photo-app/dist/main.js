"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, 'luixaviles', 'Luis', true);
var album = new photo_app_1.Album(10, 'Platzi Pictures');
var picture = new photo_app_1.Picture(1, 'TypeScript Course', '2020-03', photo_app_1.PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
