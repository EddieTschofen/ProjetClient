System.register(["@angular/core", "@NoyauFonctionnel/service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, service_1, htmlTemplate, ListeChoses;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
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
            ListeChoses = class ListeChoses {
                constructor(serviceListe) {
                    this.serviceListe = serviceListe;
                    this.choses = [];
                    this.filterAll = () => true;
                    this.filterDone = (c) => c.fait;
                    this.filterUnDone = (c) => !c.fait;
                    this.currentFilter = this.filterAll;
                }
                ;
                ngOnInit() {
                    service_1.ListeChosesService.getData().then((nf) => {
                        this.nf = nf;
                        this.choses = nf.choses;
                    });
                }
                getChoses() {
                    return this.choses.filter(this.currentFilter);
                }
                add(str) {
                    if (str !== "")
                        this.nf.Ajouter(str);
                }
                ToutEstFait() {
                    return this.nf.choses.reduce((acc, c) => acc && c.fait, true);
                }
                ToutCocherDecocher() {
                    let cocher = !this.ToutEstFait();
                    this.nf.choses.forEach(c => c.Fait(cocher));
                }
                DeleteCompleted() {
                    this.choses.filter(this.filterDone).forEach(c => c.dispose());
                }
                getRestantes() {
                    return this.choses.filter(this.filterUnDone).length;
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], ListeChoses.prototype, "titre", void 0);
            ListeChoses = __decorate([
                core_1.Component({
                    selector: "liste-choses",
                    template: htmlTemplate
                }),
                __metadata("design:paramtypes", [service_1.ListeChosesService])
            ], ListeChoses);
            exports_1("ListeChoses", ListeChoses);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJTSxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzRXBCLENBQUM7WUFPVyxXQUFXLEdBQXhCO2dCQVFDLFlBQXNCLFlBQWdDO29CQUFoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7b0JBTDNDLFdBQU0sR0FBYyxFQUFFLENBQUM7b0JBQy9CLGNBQVMsR0FBa0IsTUFBTSxJQUFJLENBQUM7b0JBQ3RDLGVBQVUsR0FBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDekMsaUJBQVksR0FBZSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzFDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFFbEMsQ0FBQztnQkFBQSxDQUFDO2dCQUNDLFFBQVE7b0JBQ0osNEJBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRTt3QkFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBTyxFQUFFLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRCxTQUFTO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0QsR0FBRyxDQUFDLEdBQVU7b0JBQ1YsRUFBRSxDQUFBLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQzt3QkFDVixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxXQUFXO29CQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUNELGtCQUFrQjtvQkFDZCxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFFLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0QsZUFBZTtvQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFDRCxZQUFZO29CQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUN4RCxDQUFDO2FBQ0osQ0FBQTtZQW5DWTtnQkFBUixZQUFLLEVBQUU7O3NEQUFnQjtZQURmLFdBQVc7Z0JBSnZCLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFJLGNBQWM7b0JBQzFCLFFBQVEsRUFBSSxZQUFZO2lCQUN6QixDQUFDO2lEQVNtQyw0QkFBa0I7ZUFSMUMsV0FBVyxDQW9DdkI7O1FBQ0QsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL0xpc3RlQ2hvc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9ICAgICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDaG9zZSwgTGlzdGVDaG9zZXMgYXMgTGlzdGVDaG9zZXNORn0gXHRmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvbmZcIjtcclxuaW1wb3J0IHtMaXN0ZUNob3Nlc1NlcnZpY2V9ICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL3NlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcclxuXHQ8c2VjdGlvbiAqbmdJZj1cIm5mXCIgY2xhc3M9XCJ0b2RvYXBwXCI+XHJcblx0XHQ8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XHJcblx0XHRcdDxoMT57e3RpdHJlfX08L2gxPlxyXG5cdFx0XHQ8aW5wdXQgIGNsYXNzPVwidG9nZ2xlLWFsbFwiIFxyXG5cdFx0XHQgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdCAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiVG91dENvY2hlckRlY29jaGVyKClcIlxyXG5cdFx0XHQgICAgICAgIFtuZ01vZGVsXT1cIlRvdXRFc3RGYWl0KClcIlxyXG5cdFx0XHQgICAgICAgIC8+XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJ0b2dnbGUtYWxsXCI+TWFyayBhbGwgYXMgY29tcGxldGU8L2xhYmVsPlxyXG5cdFx0XHQ8Zm9ybSAoc3VibWl0KT1cImFkZChuZXdUb2RvLnZhbHVlKTsgbmV3VG9kby52YWx1ZT0nJztcIj5cclxuXHRcdFx0XHQ8aW5wdXQgIGNsYXNzICAgICAgID0gXCJuZXctdG9kb1wiIFxyXG5cdFx0XHRcdCAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlF1ZSBmYWlyZT9cIiBcclxuXHRcdFx0XHQgICAgICAgICNuZXdUb2RvIFxyXG5cdFx0XHRcdCAgICAgICAgYXV0b2ZvY3VzPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHRcdDxzZWN0aW9uIGNsYXNzPVwibWFpblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9kby1saXN0IG1kbC1ncmlkXCI+XHJcblx0XHRcdCAgICA8ZGl2IFxyXG5cdFx0XHQgICAgICAgIGNsYXNzICAgICAgICAgICAgICAgPSBcIm1kbC1jZWxsIG1kbC1jZWxsLS00LWNvbFwiXHJcblx0XHRcdCAgICAgICAgKm5nRm9yICAgICAgICAgICAgICA9IFwibGV0IGNob3NlIG9mIGdldENob3NlcygpXCIgXHJcblx0XHRcdCAgICAgICAgW2NsYXNzLmNvbXBsZXRlZF0gICA9IFwiY2hvc2UuZmFpdFwiXHJcblx0XHRcdCAgICAgICAgW2NsYXNzLmVkaXRpbmddICAgICA9IFwiY29tcG8uZWRpdGluZ1wiXHJcblx0XHRcdCAgICAgICAgPlxyXG5cdFx0XHQgICAgICAgIDxpdGVtLWNob3NlIFtuZl09XCJjaG9zZVwiICNjb21wbz5cclxuXHRcdFx0ICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidG9nZ2xlXCIvPlxyXG5cdFx0XHQgICAgICAgICA8L2l0ZW0tY2hvc2U+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPCEtLSA8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cclxuXHRcdFx0ICAgIDxsaSBcclxuXHRcdFx0ICAgICAgICAqbmdGb3IgICAgICAgICAgICAgID0gXCJsZXQgY2hvc2Ugb2YgZ2V0Q2hvc2VzKClcIiBcclxuXHRcdFx0ICAgICAgICBbY2xhc3MuY29tcGxldGVkXSAgID0gXCJjaG9zZS5mYWl0XCJcclxuXHRcdFx0ICAgICAgICBbY2xhc3MuZWRpdGluZ10gICAgID0gXCJjb21wby5lZGl0aW5nXCJcclxuXHRcdFx0ICAgICAgICA+XHJcblx0XHRcdCAgICAgICAgPGl0ZW0tY2hvc2UgW25mXT1cImNob3NlXCIgI2NvbXBvPlxyXG5cdFx0XHQgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGVcIi8+XHJcblx0XHRcdCAgICAgICAgIDwvaXRlbS1jaG9zZT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+LS0+XHJcblx0XHQ8L3NlY3Rpb24+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj48c3Ryb25nPjwvc3Ryb25nPnJlc3QuIHt7Z2V0UmVzdGFudGVzKCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmlsdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmlsdGVyQWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImN1cnJlbnRGaWx0ZXI9ZmlsdGVyQWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImN1cnJlbnRGaWx0ZXI9PT1maWx0ZXJBbGxcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YWxsX2luY2x1c2l2ZTwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmlsdGVyVW5Eb25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImN1cnJlbnRGaWx0ZXI9ZmlsdGVyVW5Eb25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImN1cnJlbnRGaWx0ZXI9PT1maWx0ZXJVbkRvbmVcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cmFkaW9fYnV0dG9uX3VuY2hlY2tlZDwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmlsdGVyRG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjdXJyZW50RmlsdGVyPWZpbHRlckRvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiY3VycmVudEZpbHRlcj09PWZpbHRlckRvbmVcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cmFkaW9fYnV0dG9uX2NoZWNrZWQ8L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsZWFyLWNvbXBsZXRlZFwiIChjbGljayk9XCJEZWxldGVDb21wbGV0ZWQoKVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGVfZm9yZXZlcjwvaT48L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuXHQ8L3NlY3Rpb24+XHJcblx0PCEtLTxoci8+XHJcblx0PHNlY3Rpb24+XHJcblx0ICAgIDxzZWN0aW9uICpuZ0Zvcj1cImxldCBjaG9zZSBvZiBnZXRDaG9zZXMoKVwiPlxyXG5cdCAgICAgICAge3tjaG9zZS5mYWl0fX0gOiB7e2Nob3NlLnRleHRlfX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblx0PC9zZWN0aW9uPi0tPlxyXG5gO1xyXG5cclxudHlwZSBmaWx0ZXJDaG9zZSA9IChjIDogQ2hvc2UpID0+IGJvb2xlYW47XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yXHRcdDogXCJsaXN0ZS1jaG9zZXNcIixcclxuICB0ZW1wbGF0ZVx0XHQ6IGh0bWxUZW1wbGF0ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXMgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgdGl0cmVcdDogc3RyaW5nO1xyXG4gICAgcHVibGljIG5mICAgICAgIDogTGlzdGVDaG9zZXNORjtcclxuICAgIHByaXZhdGUgY2hvc2VzICA6IENob3NlW10gPSBbXTtcclxuICAgIGZpbHRlckFsbCAgICAgICA6IEZJTFRFUiA9ICgpID0+IHRydWU7XHJcbiAgICBmaWx0ZXJEb25lICAgICAgOiBGSUxURVIgPSAoYykgPT4gYy5mYWl0O1xyXG4gICAgZmlsdGVyVW5Eb25lICAgIDogRklMVEVSID0gKGMpID0+ICFjLmZhaXQ7XHJcbiAgICBjdXJyZW50RmlsdGVyID0gdGhpcy5maWx0ZXJBbGw7XHJcblx0Y29uc3RydWN0b3JcdFx0KHByaXZhdGUgc2VydmljZUxpc3RlOiBMaXN0ZUNob3Nlc1NlcnZpY2UpIHtcclxuXHR9O1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgTGlzdGVDaG9zZXNTZXJ2aWNlLmdldERhdGEoKS50aGVuKCAobmYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZiAgICAgPSBuZjtcclxuICAgICAgICAgICAgdGhpcy5jaG9zZXMgPSBuZi5jaG9zZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRDaG9zZXMoKSA6IENob3NlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNob3Nlcy5maWx0ZXIodGhpcy5jdXJyZW50RmlsdGVyKTtcclxuICAgIH1cclxuICAgIGFkZChzdHI6c3RyaW5nKSB7XHJcbiAgICAgICAgaWYoc3RyICE9PSBcIlwiKVxyXG4gICAgICAgICAgICB0aGlzLm5mLkFqb3V0ZXIoc3RyKTtcclxuICAgIH1cclxuICAgIFRvdXRFc3RGYWl0KCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmYuY2hvc2VzLnJlZHVjZSggKGFjYyxjKSA9PiBhY2MgJiYgYy5mYWl0LCB0cnVlKTtcclxuICAgIH1cclxuICAgIFRvdXRDb2NoZXJEZWNvY2hlcigpIHtcclxuICAgICAgICBsZXQgY29jaGVyID0gIXRoaXMuVG91dEVzdEZhaXQoKTtcclxuICAgICAgICB0aGlzLm5mLmNob3Nlcy5mb3JFYWNoKCBjID0+IGMuRmFpdChjb2NoZXIpICk7XHJcbiAgICB9XHJcbiAgICBEZWxldGVDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jaG9zZXMuZmlsdGVyKHRoaXMuZmlsdGVyRG9uZSkuZm9yRWFjaChjID0+IGMuZGlzcG9zZSgpKTtcclxuICAgIH1cclxuICAgIGdldFJlc3RhbnRlcygpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvc2VzLmZpbHRlcih0aGlzLmZpbHRlclVuRG9uZSkubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
