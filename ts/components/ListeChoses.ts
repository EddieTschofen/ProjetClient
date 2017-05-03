import {Component, Input, OnInit}               from "@angular/core";
import {Chose, ListeChoses as ListeChosesNF} 	from "@NoyauFonctionnel/nf";
import {ListeChosesService}                     from "@NoyauFonctionnel/service";

const htmlTemplate = `
	<section *ngIf="nf" class="todoapp">
		<header class="header">
			<h1>{{titre}}</h1>
			<input  class="toggle-all" 
			        type="checkbox"
			        (ngModelChange)="ToutCocherDecocher()"
			        [ngModel]="ToutEstFait()"
			        />
			<label for="toggle-all">Mark all as complete</label>
			<form (submit)="add(newTodo.value); newTodo.value='';">
				<input  class       = "new-todo" 
				        placeholder = "Que faire?" 
				        #newTodo 
				        autofocus>
			</form>
		</header>
		<section class="main">
			<div class="todo-list mdl-grid">
			    <div 
			        class               = "mdl-cell mdl-cell--4-col"
			        *ngFor              = "let chose of getChoses()" 
			        [class.completed]   = "chose.fait"
			        [class.editing]     = "compo.editing"
			        >
			        <item-chose [nf]="chose" #compo>
			            <input class="toggle"/>
			         </item-chose>
                </div>
            </div>
           <!-- <ul class="todo-list">
			    <li 
			        *ngFor              = "let chose of getChoses()" 
			        [class.completed]   = "chose.fait"
			        [class.editing]     = "compo.editing"
			        >
			        <item-chose [nf]="chose" #compo>
			            <input class="toggle"/>
			         </item-chose>
                </li>
            </ul>-->
		</section>
        <footer class="footer">
            <span class="todo-count"><strong></strong>rest. {{getRestantes()}}</span>
            <ul class="filters">
                <li>
                    <a class="filterAll"
                        (click)="currentFilter=filterAll"
                        [class.selected]="currentFilter===filterAll"><i class="material-icons">all_inclusive</i></a>
                </li>
                <li>
                    <a class="filterUnDone"
                        (click)="currentFilter=filterUnDone"
                        [class.selected]="currentFilter===filterUnDone"><i class="material-icons">radio_button_unchecked</i></a>
                </li>
                <li>
                    <a class="filterDone"
                        (click)="currentFilter=filterDone"
                        [class.selected]="currentFilter===filterDone"><i class="material-icons">radio_button_checked</i></a>
                </li>
            </ul>
            <button class="clear-completed" (click)="DeleteCompleted()"><i class="material-icons">delete_forever</i></button>
        </footer>
	</section>
	<!--<hr/>
	<section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
	</section>-->
`;

type filterChose = (c : Chose) => boolean;
@Component({
  selector		: "liste-choses",
  template		: htmlTemplate
})
export class ListeChoses implements OnInit {
    @Input() titre	: string;
    public nf       : ListeChosesNF;
    private choses  : Chose[] = [];
    filterAll       : FILTER = () => true;
    filterDone      : FILTER = (c) => c.fait;
    filterUnDone    : FILTER = (c) => !c.fait;
    currentFilter = this.filterAll;
	constructor		(private serviceListe: ListeChosesService) {
	};
    ngOnInit(): void {
        ListeChosesService.getData().then( (nf) => {
            this.nf     = nf;
            this.choses = nf.choses;
        });
    }
    getChoses() : Chose[] {
        return this.choses.filter(this.currentFilter);
    }
    add(str:string) {
        if(str !== "")
            this.nf.Ajouter(str);
    }
    ToutEstFait():boolean {
        return this.nf.choses.reduce( (acc,c) => acc && c.fait, true);
    }
    ToutCocherDecocher() {
        let cocher = !this.ToutEstFait();
        this.nf.choses.forEach( c => c.Fait(cocher) );
    }
    DeleteCompleted() {
        this.choses.filter(this.filterDone).forEach(c => c.dispose());
    }
    getRestantes():number {
        return this.choses.filter(this.filterUnDone).length;
    }
}
