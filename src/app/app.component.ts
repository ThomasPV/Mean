import { Component, OnInit } from '@angular/core';
import { todoService } from '../services/todo.service';
import { todo } from '../todo';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    todos: todo[];
    items: FirebaseListObservable<any[]>;
    
    

  constructor(private _todoService:todoService , private db: AngularFireDatabase){
  
  this.items = db.list('/items');
  
  
  }
  
  ngOnInit(){
  
  this.todos = [];
  this._todoService.getTodos()
  .subscribe(todos => this.todos = todos )
  }
  
addTodo($event, todoText){
  
          if($event.which === 1){
          var result;
          var newTodo = {
          
          _id: null,
          text: todoText.value,
          isCompleted:false

          };

          this._todoService.saveTodo(newTodo).subscribe(x => {
          
          this.todos = [];
          
          });
          this._todoService.getTodos().subscribe(todos => this.todos = todos );
          todoText.value= '';

          }

          }


          
updateCompletionTodo($event, todo){


        if($event.which === 1){

          var _Todo = {
          _id: todo._id,
          text: todo.text,
          isCompleted: !todo.isCompleted

          };

          var result = this._todoService.updateTodo(_Todo);
          result.map(res => res.json()).subscribe(data => {todo.isCompleted = !todo.isCompleted;});

          }
          }
          
updateTodoText($event, todo){

        

        if($event.which === 13){
        
          todo.text = $event.target.value ;
          
          var _updTodo={
          
          _id : todo._id,
          text: todo.text,
          isCompleted: todo.isCompleted
          
          
          };
          
          var result = this._todoService.updateTodo(_updTodo);
          result.map(res => res.json()).subscribe(data => {this.setEditStatus(todo, false);});

          
        
        
        }



        }

setEditStatus(todo, state){

    if(state){
    
    todo.inEditMode = state;
    
    }else{
    
    delete todo.inEditMode;
    
    }

}

deleteTodo($event, id){

    var todos = this.todos;

    if($event.which === 1){
    
        this._todoService.removeTodo(id).map(res => res.json()).subscribe(data =>{
        
        if(data.n == 1){
         
         for(var i=0; i < todos.length; i++){
         
         if(todos[i]._id == id)
         
         todos.splice(i,1);
         }
        
        
        }
        
        
        
        });




    }


}





}
  
  

