import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _getUrl = "/api";
  private _postUrl = "/api";
  constructor(private _http: Http) { }

  getTodos(){
    return this._http.get(this._getUrl).pipe(map((response: Response) => response.json()));  
  }


  // to save
  saveTodos(todo){
  let headers =  new Headers({'Content-Type':'application/json'});
  let options = new RequestOptions({headers : headers});
  return this._http.post(this._postUrl, JSON.stringify(todo), options).pipe(map((response:Response)=> response.json()));

}

//update
updateTodo(todo){
  let headers = new Headers({'Content-Type':'application/json'});
  let options = new RequestOptions({headers : headers});
  return this._http.put('/api/'+todo._id, JSON.stringify(todo), options).pipe(
  map((response:Response)=> response.json()));
  }

//delete

deleteTodo(id){
  return this._http.delete('/api/'+id)
  .pipe(map((response:Response)=> response.json()));
}


}
