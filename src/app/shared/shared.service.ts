import {Injectable} from "@angular/core";

@Injectable({
  providedIn : "root"
})
export class SharedService{
  NewRows:any[];
  result:number;
  constructor(){}
  setData(row){
    this.NewRows = row;
  }
  getData(){
    return this.NewRows;
  }
  setBalance(data){
    this.result = data;
  }
  getBalance(){
    return this.result;
  }
}