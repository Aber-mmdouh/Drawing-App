import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawing',
  imports: [],
  templateUrl: './darwing-app.html',
  styleUrl: './darwing-app.css',
})
export class DarwingApp implements AfterViewInit{

 @ViewChild('canvas') canvasRef !:ElementRef< HTMLCanvasElement>;
 ctx:any
  ngAfterViewInit() {
 this.ctx=this.canvasRef?.nativeElement.getContext('2d')!;
  }


 pressed=signal(false);
size=10
color='black'
  drawCircle(x:number,y:number){

    this.ctx?.beginPath();
    this.ctx?.arc(x,y,this.size,0,Math.PI*2);
// console.log(this.ctx)
    this.ctx.fillStyle =this.color;
    this.ctx?.fill();
  }
  drawLine(x1:number,y1:number,x2:number,y2:number){

    this.ctx?.beginPath();
    this.ctx?.moveTo(x1,y1);
    this.ctx?.lineTo(x2,y2);
    this.ctx.lineWidth=this.size*2;
    this.ctx.strokeStyle=this.color;
    this.ctx?.stroke();
      }
changecolor(color:string){
  this.color=color
}
decreaseSize(){
if(this.size>5){
  this.size -=5
}}
increaseSize(){
if(this.size<50){
  this.size+=5
}else{
this.size=50;
}}
mouseDown(e: MouseEvent){
  this.pressed.set(true);
}
mouseUp(event: MouseEvent){
  this.pressed.set(false);
  let x=undefined;
 let  y=undefined;
}
mouseMove(e: MouseEvent){
if(this.pressed()){
  const x=e.offsetX;
  const y=e.offsetY;
  let x2=x;
let y2=y;
  this.drawCircle(x,y);
  this.drawLine(x,y,x2,y2);

}
}
clear(){
 this.ctx?.clearRect(0,0,this.canvasRef.nativeElement.width,this.canvasRef.nativeElement.height)
}}

