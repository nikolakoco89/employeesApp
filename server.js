/**
 * Created by Nikolche on 29.1.14.
 */

// set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

// mongodb connection and app configuration
mongoose.connect('mongodb://localhost/test');

app.configure(function () {
    app.use(express.static(__dirname + '/app'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

// define model
var Employee = mongoose.model('Employee', {
    firstName : String,
    lastName : String,
    photoUrl : String
});

// routes ==========================
// api
// GET
app.get('/api/employees', function(req, res) {
    console.log("GET");
    Employee.find(function(err, employees) {
        if(err) {
            res.send(err);
        }

        res.json(employees);
    });
});

// Get by ID
app.get('/api/employees/:employeeId', function(req, res) {
    Employee.findById(req.params.employeeId, function(err, employee) {
        if(err) {
            res.send(err);
        }

        res.json(employee);
    });
    Employee.find(function(err, employees) {
        if(err) {
            res.send(err);
        }

        res.json(employees);
    });
});

// POST
app.post('/api/employees', function(req, res) {
    Employee.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        photoUrl : req.body.photoUrl
    }, function(err, employee) {
        if(err) {
            res.send(err);
        }
        Employee.find(function(err, employees){
            if(err) {
                res.send(err);
            }
            res.json(employees);
        });
    });
});

// DELETE
app.delete('/api/employees/:employee_id', function(req, res) {
    Employee.remove({_id : req.params.employee_id}, function (err, employee) {
        if(err) {
            res.send(err);
        }

        Employee.find(function(err, employees) {
            if(err) {
                res.send(err);
            }
            res.json(employees);
        })
    });
});

// application
app.get('*', function(req, res) {
    res.sendfile('./app/index.html'); // load the single view file, angular will handle other views
});

// start listening (start app)
app.listen(8080);
console.log("App listening on port 8080");