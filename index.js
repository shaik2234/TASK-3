import express from "express";
const app=express();

const books=[];

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.get("/books",(req,res)=>{
    res.json(books);
});

app.post("/books",(req,res)=>{
    const {title,author}=req.body;
    if(!title || !author){
        return res.status(400).json({error:"title and author are required"});
    }
    const newbook={
        id:books.length?books[books.length-1].id+1:1,
        title:title,
        author:author
    }
    books.push(newbook);
    res.status(201).json(newbook);
});

app.put("/books/:id",(req,res)=>{
    const bookId=parseInt(req.params.id);
    const {title,author}=req.body;
    const book=books.find(b=>b.id===bookId);
    if(!book){
        return res.status(404).json({error:"Book not found"});
    }
    if(title){
        book.title=title;
    }
    if(author){
        book.author=author;
    }
    res.json(book);
});

app.delete("/books/:id",(req,res)=>{
    const bookId=parseInt(req.params.id);
    const index=books.findIndex(b=>b.id===bookId);
    if(index===-1){
        return res.status(404).json({error:"Book not found"});
    }
    const deletedBook=books.splice(index,1)[0];
    res.json(deletedBook);
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
})