import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalcService } from '../calc.service';
@Component({
  selector: 'app-mycalculator',
  templateUrl: './mycalculator.component.html',
  styleUrls: ['./mycalculator.component.css']
})

export class MycalculatorComponent implements OnInit {
  public num1!:number;
  public num2!:number;
  public result!:number;
  constructor(private calcService:CalcService){
  }
  ngOnInit()
  {
  }
  addition()
  {
   this.result=this.num1+this.num2;
  }
  sub()
  {
    this.result=this.num1-this.num2;
  }
  multi(){
    this.result=this.num1*this.num2;
  }
  divide()
  {
    this.result=(this.num1)/(this.num2);

  }
}
