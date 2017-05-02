System.register(["@angular/core", "@NoyauFonctionnel/nf"], function (exports_1, context_1) {
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
    var core_1, nf_1, htmlTemplate, ItemChose;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
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
            ItemChose = class ItemChose {
                constructor() {
                    this.editing = false;
                }
                dispose() {
                    this.nf.dispose();
                }
                Edit() {
                    this.editing = true; //passage en mode édition qd on dbclick sur label
                    requestAnimationFrame(() => {
                        this.newTextInput.nativeElement.focus();
                    });
                }
                setText(str) {
                    this.editing = false;
                    if (str !== "")
                        this.nf.Texte(str);
                }
            };
            __decorate([
                core_1.Input("nf"),
                __metadata("design:type", nf_1.Chose)
            ], ItemChose.prototype, "nf", void 0);
            __decorate([
                core_1.ViewChild("newText"),
                __metadata("design:type", core_1.ElementRef)
            ], ItemChose.prototype, "newTextInput", void 0);
            ItemChose = __decorate([
                core_1.Component({
                    selector: "item-chose",
                    template: htmlTemplate
                })
            ], ItemChose);
            exports_1("ItemChose", ItemChose);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHTSxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQThCcEIsQ0FBQztZQU1XLFNBQVMsR0FBdEI7Z0JBSkE7b0JBT0MsWUFBTyxHQUFtQixLQUFLLENBQUM7Z0JBaUJqQyxDQUFDO2dCQWZBLE9BQU87b0JBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFDRCxJQUFJO29CQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUEsaURBQWlEO29CQUNsRSxxQkFBcUIsQ0FBRTt3QkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQVU7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixFQUFFLENBQUEsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDO3dCQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2FBRUosQ0FBQTtZQW5Ca0I7Z0JBQWQsWUFBSyxDQUFFLElBQUksQ0FBRTswQ0FBUSxVQUFLO2lEQUFDO1lBQ1Q7Z0JBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzBDQUFnQixpQkFBVTsyREFBQztZQUZwQyxTQUFTO2dCQUpyQixnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBSSxZQUFZO29CQUN4QixRQUFRLEVBQUksWUFBWTtpQkFDekIsQ0FBQztlQUNXLFNBQVMsQ0FvQnJCOztRQUNELENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9DaG9zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDaG9zZX0gZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XHJcblxyXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXHJcblx0PGRpdiBjbGFzcz1cInZpZXdcIj5cclxuXHRcdDxpbnB1dCBcdGNsYXNzXHRcdFx0PSBcInRvZ2dsZVwiIFxyXG5cdFx0XHRcdHR5cGVcdFx0XHQ9IFwiY2hlY2tib3hcIiBcclxuXHRcdFx0XHRuYW1lXHRcdFx0PSBcImZhaXRcIlxyXG5cdFx0XHRcdFtuZ01vZGVsXSAgICAgICA9IFwibmYuZmFpdFwiIFxyXG5cdFx0XHQgICAgKG5nTW9kZWxDaGFuZ2UpID0gXCJuZi5GYWl0KGlucHV0RmFpdC5jaGVja2VkKVwiXHJcblx0XHRcdCAgICAjaW5wdXRGYWl0IFxyXG5cdFx0XHQgICAgLz5cclxuXHRcdDwhLS08bGFiZWwgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIgZm9yPVwiY2hlY2tib3gtMVwiPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzXHRcdFx0PSBcIm1kbC1jaGVja2JveGlucHV0XCIgXHJcblx0XHRcdFx0dHlwZVx0XHRcdD0gXCJjaGVja2JveFwiIFxyXG5cdFx0XHRcdG5hbWVcdFx0XHQ9IFwiZmFpdFwiXHJcblx0XHRcdFx0W25nTW9kZWxdICAgICAgID0gXCJuZi5mYWl0XCIgXHJcblx0XHRcdCAgICAobmdNb2RlbENoYW5nZSkgPSBcIm5mLkZhaXQoaW5wdXRGYWl0LmNoZWNrZWQpXCJcclxuXHRcdFx0ICAgICNpbnB1dEZhaXQgXHJcblx0XHRcdCAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGwtY2hlY2tib3hsYWJlbFwiPkNoZWNrYm94PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+LS0+XHQgICAgXHJcblx0XHQ8bGFiZWwgXHRjbGFzcz1cInRleHRlXCJcclxuXHRcdFx0XHQoZGJsY2xpY2spPVwiRWRpdCgpXCI+e3tuZi50ZXh0ZX19PC9sYWJlbD5cclxuXHRcdDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgKGNsaWNrKT1cImRpc3Bvc2UoKVwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L2k+PC9idXR0b24+XHJcblx0PC9kaXY+XHJcblx0PGZvcm0gKm5nSWY9XCJlZGl0aW5nXCIgKHN1Ym1pdCk9XCJzZXRUZXh0KG5ld1RleHQudmFsdWUpXCI+XHJcblx0XHQ8aW5wdXQgXHRjbGFzc1x0XHQ9IFwiZWRpdFwiXHJcblx0XHRcdFx0W25nTW9kZWxdICAgPSBcIm5mLnRleHRlXCJcclxuXHRcdFx0XHQoYmx1cikgICAgICA9IFwic2V0VGV4dChuZXdUZXh0LnZhbHVlKVwiXHJcblx0XHRcdFx0bmFtZSAgICAgICAgPSBcInRleHRGaWVsZFwiXHJcblx0XHRcdFx0I25ld1RleHQvPlxyXG5cdDwvZm9ybT5cclxuYDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yXHRcdDogXCJpdGVtLWNob3NlXCIsXHJcbiAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1DaG9zZSB7XHJcbiAgICBASW5wdXQgKFwibmZcIiApIG5mICAgOiBDaG9zZTtcclxuXHRAVmlld0NoaWxkKFwibmV3VGV4dFwiKSBuZXdUZXh0SW5wdXQgOiBFbGVtZW50UmVmO1xyXG5cdGVkaXRpbmdcdFx0XHQgICAgOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGRpc3Bvc2UoKSB7XHJcblx0ICAgIHRoaXMubmYuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG4gICAgRWRpdCgpIHtcclxuXHQgICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTsvL3Bhc3NhZ2UgZW4gbW9kZSDDqWRpdGlvbiBxZCBvbiBkYmNsaWNrIHN1ciBsYWJlbFxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1RleHRJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRUZXh0KHN0cjpzdHJpbmcpIHtcclxuXHQgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcblx0ICAgIGlmKHN0ciAhPT0gXCJcIilcclxuXHQgICAgICAgIHRoaXMubmYuVGV4dGUoc3RyKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
