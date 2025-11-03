import mongoose from "mongoose";

// ****************************************SCHEMA TO TELL WHAT KIND OF DATA WE ARE STORING  (write according to list.json)
const bookSchema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String,
});
// ********

// ****************************************CREATING A MODEL FOR THIS SCHEMA (converting the above schema into a model)
const Book = mongoose.model("Book", bookSchema);//it creates a collection called "Book" in db and "const Book" stores the content of that database
// ********

export default Book;
