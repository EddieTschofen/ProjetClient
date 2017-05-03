import { Component, Input, ViewChild, ElementRef} from "@angular/core";
import {Chose} from "@NoyauFonctionnel/nf";

const htmlTemplate = `
	<div class="view">
		<input 	class			= "toggle" 
				type			= "checkbox" 
				name			= "fait"
				[ngModel]       = "nf.fait" 
			    (ngModelChange) = "nf.Fait(inputFait.checked)"
			    #inputFait 
			    />
		<!--<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
          <input class			= "mdl-checkboxinput" 
				type			= "checkbox" 
				name			= "fait"
				[ngModel]       = "nf.fait" 
			    (ngModelChange) = "nf.Fait(inputFait.checked)"
			    #inputFait 
			    />
          <span class="mdl-checkboxlabel">Checkbox</span>
        </label>-->	    
		<label 	class="texte"
				(dblclick)="Edit()">{{nf.texte}}</label>
		<button class="destroy" (click)="dispose()"><i class="material-icons">delete</i></button>
	</div>
	<form *ngIf="editing" (submit)="setText(newText.value)">
		<input 	class		= "edit"
				[ngModel]   = "nf.texte"
				(blur)      = "setText(newText.value)"
				name        = "textField"
				#newText/>
	</form>
`;

@Component({
  selector		: "item-chose",
  template		: htmlTemplate
})
export class ItemChose {
    @Input ("nf" ) nf   : Chose;
	@ViewChild("newText") newTextInput : ElementRef;
	editing			    : boolean = false;

	dispose() {
	    this.nf.dispose();
    }
    Edit() {
	    this.editing = true;//passage en mode édition qd on dbclick sur label
        requestAnimationFrame( () => {
            this.newTextInput.nativeElement.focus();
        });
    }
    setText(str:string) {
	    this.editing = false;
	    if(str !== "")
	        this.nf.Texte(str);
    }

}
