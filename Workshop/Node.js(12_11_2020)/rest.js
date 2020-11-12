//install express : npm i express
//install mysql : npm i mysql
//install body-parser : npm i body-parser
'use strict'
const express = require('express');
const mysql = require('mysql');
//initializing body parser 
var bodyParser = require('body-parser');
//const connection  = require( './database.js');
var app = express();

//connection with database 
const connectionConfiguration = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'workshop'
});


connectionConfiguration.connect((err)=>{
  if(err) 
      throw err
  console.log("Connected to Database Workshop");
  
})

// get all employees
app.get('/employees',function(request,response){
   
  connectionConfiguration.query("SELECT * FROM employee" , (err,rows)=>{
    if(err) throw err
   response.send(rows)
})

})//end of app.get list employees

// get employee by id
app.get('/employees/:id',function(request,response){
  connectionConfiguration.query("SELECT * FROM employee where empid="+request.params.id,(err,rows)=>{
    if(err) throw err
    response.send(rows)
  })
})//end of app.get  employee by id



//create application/x-www-form-urlencoded parser--> represents URL encoded form
var urlEncodedParser = bodyParser.urlencoded({extended:false})

// add employees
app.post('/employees/',urlEncodedParser,function(request,response){

  connectionConfiguration.query("INSERT INTO employee values("+request.body.empid + ",'"+ request.body.empname + "',"+ request.body.empsalary + ",'"+ request.body.empdesgn + "'," + request.body.deptid + ")",(err,rows)=>{
    if(err) throw err
    response.send(rows)
    })
})//end of app.post employee

app.put('/employees/',urlEncodedParser,function(request,response){
  console.log(request.body.empid);
  connectionConfiguration.query("UPDATE employee SET empname='"+ request.body.empname+"', empsalary="+request.body.empsalary + ", empdesgn='"+ request.body.empdesgn+ "',deptid="+ request.body.deptid+ "WHERE empid=" + request.body.empid,(err,rows)=>{
    if(err) 
        throw err
    response.send(rows)
    })
}) //end of app.post update 


// get all departments
app.get('/departments',function(request,response){
   
  connectionConfiguration.query("SELECT * FROM departments" , (err,rows)=>{
    if(err) throw err
   response.send(rows)
})

})//end of app.get list employees

// get department by id
app.get('/departments/:id',function(request,response){
  connectionConfiguration.query("SELECT * FROM departments where deptid="+request.params.id,(err,rows)=>{
    if(err) throw err
    response.send(rows)
  })
})//end of app.get  department by id



//create application/x-www-form-urlencoded parser--> represents URL encoded form
var urlEncodedParser = bodyParser.urlencoded({extended:false})

// add department
app.post('/departments/',urlEncodedParser,function(request,response){

  connectionConfiguration.query("INSERT INTO department values("+request.body.deptid + ",'"+ request.body.deptname+ "')",(err,rows)=>{
    if(err) throw err
    response.send(rows)
    })
})//end of app.post department

app.put('/departments/',urlEncodedParser,function(request,response){
  console.log(request.body.empid);
  connectionConfiguration.query("UPDATE department SET deptname='"+ request.body.deptname+"' WHERE deptid=" + request.body.deptid,(err,rows)=>{
    if(err) 
        throw err
    response.send(rows)
    })
}) //end of app.post update 



//server
app.listen(8000,function(){
    console.log("server is running on port 8000")
})