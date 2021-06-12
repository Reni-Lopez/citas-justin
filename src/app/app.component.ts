import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ev02';

  contadorFichas = 0;
  caja1 = 0;
  caja2 = 0;
  caja3 = 0;
  cajaAntencion = 1;

  constructor() {}

  ngOnInit() {}


  timeLeft1: number = 20;
  interval1;
  startTimer1() {
    this.interval1 = setInterval(() => {
      if(this.timeLeft1 > 0) {
        this.timeLeft1--;
      } else {
        return;
      }
    },1000)
    
  }

  timeLeft2: number = 20;
  interval2;
  startTimer2() {
    this.interval2 = setInterval(() => {
      if(this.timeLeft2 > 0) {
        this.timeLeft2--;
      } else {
        return;
      }
    },1000)
  }

  timeLeft3: number = 20;
  interval3;
  startTimer3() {
    this.interval3 = setInterval(() => {
      if(this.timeLeft3 > 0) {
        this.timeLeft3--;
      } else {
        return;
      }
    },1000)
  }

  pauseTimer1() {
    clearInterval(this.interval1);
  }
  pauseTimer2() {
    clearInterval(this.interval2);
  }
  pauseTimer3() {
    clearInterval(this.interval3);
  }


  asignarFicha(ficha: any) {
    
    this.contadorFichas = ficha;

    if (this.contadorFichas == 0) {
      this.contadorFichas++;
      this.caja1++;
      this.startTimer1();
      return;
    }
    if (this.contadorFichas >= 1) {
      this.contadorFichas++;

      
      if (this.caja1 == 0) {
        this.startTimer1();
        this.caja1++;
        this.cajaAntencion = this.caja1;
        return;
      }else if (this.caja2 == 0) {
        this.caja2 = this.contadorFichas;
        this.cajaAntencion = this.caja2;
        this.startTimer2();
        return;
      }else if (this.caja3 == 0) {
        this.caja3 = this.contadorFichas;
        this.cajaAntencion = this.caja3;
        this.startTimer3();
        return;
      }

    }
  }

  reinicioCaja1( numCaja : any ){
    console.log('test3');
    this.timeLeft1 = 20;
    this.caja1 = numCaja;
    this.caja1 = 0;
    this.caja1 = this.contadorFichas;
    this.cajaAntencion = 1;
  }
  reinicioCaja2( numCaja : any ){
    this.timeLeft2 = 20;
    this.caja2 = numCaja;
    this.caja2 = 0;
    this.caja2 = this.contadorFichas;
    this.cajaAntencion = 2;
  }
  reinicioCaja3( numCaja : any ){
    this.timeLeft3 = 20;
    this.caja3 = numCaja;
    this.caja3 = 0;
    this.caja3 = this.contadorFichas;
    this.cajaAntencion = 3;
  }
}
