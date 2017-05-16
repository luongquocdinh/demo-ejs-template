var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.Promise = require('bluebird');

var posts = new Schema({
    title: {type: String},
    thumbnail: {type: String},
    brief: {type: String},
    content: {type: String},
    is_accept: {type: Boolean},
    created_at: { type: Date, default: Date.now},
    updated_at: { type: Date, default: Date.now}
},
{ versionKey: false }
)

var Posts = mongoose.model('posts', posts)

module.exports = Posts