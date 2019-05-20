import { Component, OnInit } from '@angular/core';
import { disableBindings } from '@angular/core/src/render3';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  horas:any = 'Horas';
  dias:any = 'Dias';
  totalSemanal:number=0;
  totalMensual:number=0;
  total:number = 0;
  constructor() { }

  ngOnInit() {
  }

  calcularTotal(){
    if(this.dias!='Dias'&&this.horas!='Horas')
    {
    this.total = this.horas * this.dias;
    this.totalSemanal=this.total*6;
    this.totalMensual=this.totalSemanal*4;
    console.log(this.total);
    }
    else
    {
      this.total=0;
      this.totalSemanal=0;
      this.totalMensual=0;
    }
  }
  calcularDias(data){
    if(this.dias=='Dias')
    {
      this.dias=0;
    }
    if(data == 'restar')
    {
      this.dias--;
    }else{
      this.dias++;
    }  
    if(this.dias<=0)
    {
      this.dias='Dias';
    }
    this.calcularTotal();
  }
  calcularHoras(data){
    if(this.horas=='Horas')
    {
      this.horas=0;
    }
    if(data == 'restar')
    {
      this.horas--;
    }else{
      this.horas++;
    }  
    if(this.horas<=0)
    {
      this.horas='Horas';
    }
    this.calcularTotal();
  }
}
