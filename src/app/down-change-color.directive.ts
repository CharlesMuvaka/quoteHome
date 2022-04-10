import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDownChangeColor]'
})
export class DownChangeColorDirective {

  constructor(private down:ElementRef) { }

  @HostListener('mousedown') onMouseDown(){
    this.downChangeColor("white");
  }

  @HostListener('mouseup') onMouseup(){
    this.downChangeColor("black")
  }

  private downChangeColor(ans:string){
    this.down.nativeElement.style.color = ans;
  }

}
