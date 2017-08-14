import {Directive,ElementRef,Input,HostListener} from '@angular/core';

@Directive({
    selector:'[highlight]'
})
export class HighLightDirective
{
    //declare an input property
    @Input('hc') highlightcolor:string;
    @Input('fc') forecolor:string;
    
    constructor(private hostelement:ElementRef)
    {
        console.log("directive constr called");
        //subscribe to events
        hostelement.nativeElement.onmouseover = ()=>
        {
            console.log("mouseover called");
            hostelement.nativeElement.style.backgroundColor = this.highlightcolor
            hostelement.nativeElement.style.color = this.forecolor;
        }
    }

    @HostListener('mouseout')
    public OnMouseOut():void
    {
        console.log("mouseout called");
        this.hostelement.nativeElement.style.backgroundColor = null;
        this.hostelement.nativeElement.style.color = null;
    }
}                                               