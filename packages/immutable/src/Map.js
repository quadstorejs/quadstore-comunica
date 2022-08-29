"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
const has_1 = require("typed-immutable-map/dist/HashMap/has");
const get_1 = require("typed-immutable-map/dist/HashMap/get");
const set_1 = require("typed-immutable-map/dist/HashMap/set");
const forEach_1 = require("typed-immutable-map/dist/HashMap/forEach");
const map_1 = require("typed-immutable-map/dist/HashMap/map");
const filter_1 = require("typed-immutable-map/dist/HashMap/filter");
const remove_1 = require("typed-immutable-map/dist/HashMap/remove");
const entries_1 = require("typed-immutable-map/dist/HashMap/entries");
const values_1 = require("typed-immutable-map/dist/HashMap/values");
const keys_1 = require("typed-immutable-map/dist/HashMap/keys");
const size_1 = require("typed-immutable-map/dist/HashMap/size");
class Map {
    hashmap;
    constructor(entries) {
        this.hashmap = entries;
    }
    get size() {
        return (0, size_1.size)(this.hashmap);
    }
    set(key, value) {
        return new Map((0, set_1.set)(key, value, this.hashmap));
    }
    delete(key) {
        return new Map((0, remove_1.remove)(key, this.hashmap));
    }
    get(key) {
        return (0, get_1.get)(key, this.hashmap);
    }
    has(key) {
        return (0, has_1.has)(key, this.hashmap);
    }
    forEach(iterator) {
        (0, forEach_1.forEach)(iterator, this.hashmap);
    }
    map(iterator) {
        return new Map((0, map_1.map)(iterator, this.hashmap));
    }
    filter(iterator) {
        return new Map((0, filter_1.filter)(iterator, this.hashmap));
    }
    toJS() {
        return Object.fromEntries(this);
    }
    toJSON() {
        return this.toJS();
    }
    keys() {
        return (0, keys_1.keys)(this.hashmap);
    }
    values() {
        return (0, values_1.values)(this.hashmap);
    }
    entries() {
        return (0, entries_1.entries)(this.hashmap);
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
exports.Map = Map;
