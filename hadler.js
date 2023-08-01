const BookModel = require('./model')
const viewbook = (req, res) =>{
    //listbooks
    const {id} =req.params
    if (id) {
        BookModel.find({author:id}).then( books =>{
            res.json({data: books})
        }).catch(err =>console.log(err))
    } else {
        BookModel.find().then( books =>{
            res.json({data: books})
        }).catch(err =>console.log(err))
    }

   
}
const createbook = (req, res) =>{
    //createbooks
    const {title, author, description} = req.body
    const book = new BookModel({title, author, description})
    book.save().then(result =>{
        res.json({message: 'create successful', data: result})
    }).catch(err =>console.log(err))
   
}
/*
const updatebook = (req, res) =>{
    //updatebooks
    const {title, author, description} = req.body
  const updated = BookModel.update({title, author, description})
  res.json({message: "update successful", data: updated})
}
const deletebook = (req, res) =>{
    //deletebooks
    const {title} = req.body
   let deleted =  BookModel.delete({title})
   res.json({message: "book deleted", data: deleted})
}
*/
module.exports = {
   viewbook,
    createbook
   // updatebook,
   // deletebook
}