"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
var User = /** @class */ (function () {
    function User(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    User.prototype.addAlbum = function (album) {
        this.album.push(album);
    };
    return User;
}());
exports.User = User;
var Item = /** @class */ (function () {
    function Item(id, title) {
        this.id = id;
        this.title = title;
    }
    return Item;
}());
exports.Item = Item;
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this.picture = [];
        return _this;
    }
    Album.prototype.addPicture = function (picture) {
        this.picture.push(picture);
    };
    return Album;
}(Item));
exports.Album = Album;
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, _date, _orientation) {
        var _this = _super.call(this, id, title) || this;
        _this._date = _date;
        _this._orientation = _orientation;
        return _this;
    }
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ", title: " + this.title + ", orientation: " + this._orientation + "]";
    };
    return Picture;
}(Item));
exports.Picture = Picture;
