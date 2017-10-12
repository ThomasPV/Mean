var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ptv801:mlab@ds143734.mlab.com:43734/development',['todos']);


/* GET users listing. */
router.get('/todos', function(req, res, next) {
db.todos.find(function(err, todos){
    
    if(err){
        res.send('error encountered');
    }else{
        
      res.json(todos);  
        
    }
    
    
    
});
});

router.post('/todos/add', function(req, res, next) {
    
var todo = req.body;

    if(!todo.text || !(todo.isCompleted + '')){
        
        res.status(400);
        res.json({"error": "Invalid Data"});
        
        }else{
    
db.todos.save(todo ,function(err, result){
    
    if(err){
        res.send('error encountered');
    }else{
        
      res.json(result);  
        
    }
    
    });
}
});

router.put('/todos/:id', function(req, res, next) {
    
var todo = req.body;
var updObj={};

    if(todo.isCompleted){
        
        updObj.isCompleted = todo.isCompleted;
        
        
    }
    
    if(todo.text){
        
        
        updObj.text= todo.text;
        
        
    }

    if(!updObj){
        
        res.status(400);
        res.json({"error": "No Data detected."});
        
        }else{
    
db.todos.update({_id: mongojs.ObjectId(req.params.id)},updObj,{} ,function(err, result){
    
    if(err){
        res.send('error encountered in updating database');
    }else{
        
      res.json(result);  
        
    }
    
    });
}
});

router.delete('/todos/delete/:id',function(req,res,next){
                                            
   db.todos.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, result){
       
        if(err){
        res.send('error encountered in deleting the record from database');
    }else{
        
      res.json(result);  
        
    }
   });
    
    });   
       
       
                                        
                                            
                    

module.exports = router;
