import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private icon:ElementRef) { }

  @HostListener('mousedown') onMouseDown(){
    this.changeColor("black")
  }
  @HostListener('mouseup') onMouseUp(){
    this.changeColor("white")
  }

  private changeColor(color:string){
    this.icon.nativeElement.style.color = color;
  }

}
