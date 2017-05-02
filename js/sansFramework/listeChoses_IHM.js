System.register(["./ComponentIHM", "./Chose_IHM"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1, Chose_IHM_1, htmlTemplate, ListeChosesIHM;
    return {
        setters: [
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            },
            function (Chose_IHM_1_1) {
                Chose_IHM_1 = Chose_IHM_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<section>
		<form action="#/">
			<input placeholder="Que faire?">
		</form>
		<ul></ul>
	</section>
`;
            // Classe à compléter...
            ListeChosesIHM = class ListeChosesIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, rootSelector) {
                    super(NF, document.querySelector(rootSelector));
                    this.NF = NF;
                    this.mapNfIhm = new Map();
                    this.root.innerHTML = htmlTemplate;
                    // Get references and initialize from NF
                    this.ul = this.root.querySelector(`ul`);
                    this.form = this.root.querySelector(`form`);
                    this.input = this.root.querySelector(`input`);
                    this.initalizeFromNF();
                    // HTML -> NF
                    this.form.addEventListener("submit", evt => {
                        evt.preventDefault();
                        this.NF.Ajouter(this.input.value);
                        this.input.value = "";
                    });
                    // NF -> HTML
                    this.NF.on("update", (nf, eN, eV) => this.updateFromNF(eV));
                }
                initalizeFromNF() {
                    this.NF.choses.forEach(c => this.updateFromNF({ append: c }));
                }
                updateFromNF(evt) {
                    if (evt.append) {
                        let chose = evt.append;
                        let li = document.createElement("li");
                        this.ul.appendChild(li);
                        this.mapNfIhm.set(chose, new Chose_IHM_1.ChoseIHM(chose, li));
                    }
                    if (evt.remove) {
                        let chose = evt.remove;
                        let choseIHM = this.mapNfIhm.get(chose);
                        if (choseIHM) {
                            choseIHM.dispose();
                        }
                        this.mapNfIhm.delete(chose);
                    }
                }
            };
            exports_1("ListeChosesIHM", ListeChosesIHM);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbnNGcmFtZXdvcmsvbGlzdGVDaG9zZXNfSUhNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBSU0sWUFBWSxHQUFHOzs7Ozs7O0NBT3BCLENBQUM7WUFFRix3QkFBd0I7WUFDeEIsaUJBQUEsb0JBQTRCLFNBQVEsMkJBQVk7Z0JBSy9DLFlBQW1CLEVBQWUsRUFBRSxZQUFZO29CQUMvQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUUsWUFBWSxDQUFFLENBQUMsQ0FBQztvQkFEaEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtvQkFEL0IsYUFBUSxHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUd2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7b0JBRW5DLHdDQUF3QztvQkFDeEMsSUFBSSxDQUFDLEVBQUUsR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFFLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBRSxDQUFDO29CQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSxPQUFPLENBQUUsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUV2QixhQUFhO29CQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUc7d0JBQ3BDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUUsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztvQkFFSCxhQUFhO29CQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztnQkFDbEUsQ0FBQztnQkFDRCxlQUFlO29CQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBRSxDQUFFLENBQUM7Z0JBQ3BFLENBQUM7Z0JBQ0QsWUFBWSxDQUFDLEdBQXFCO29CQUM5QixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDWixJQUFJLEtBQUssR0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDO3dCQUN6QixJQUFJLEVBQUUsR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO3dCQUM3QyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBRSxFQUFFLENBQUUsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksb0JBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdEQsQ0FBQztvQkFDRCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDWixJQUFJLEtBQUssR0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDO3dCQUM3QixJQUFJLFFBQVEsR0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDM0MsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFBQSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQUEsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hDLENBQUM7Z0JBQ0wsQ0FBQzthQUNKLENBQUE7O1FBRUQsQ0FBQyIsImZpbGUiOiJzYW5zRnJhbWV3b3JrL2xpc3RlQ2hvc2VzX0lITS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hvc2UsIExpc3RlQ2hvc2VzLCBFdmVudExpc3RlQ2hvc2VzfSBcdFx0XHRmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvbmZcIjtcclxuaW1wb3J0IHtDb21wb25lbnRJSE19IFx0ZnJvbSBcIi4vQ29tcG9uZW50SUhNXCI7XHJcbmltcG9ydCB7Q2hvc2VJSE19XHRcdGZyb20gXCIuL0Nob3NlX0lITVwiO1xyXG5cclxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxyXG5cdDxzZWN0aW9uPlxyXG5cdFx0PGZvcm0gYWN0aW9uPVwiIy9cIj5cclxuXHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiUXVlIGZhaXJlP1wiPlxyXG5cdFx0PC9mb3JtPlxyXG5cdFx0PHVsPjwvdWw+XHJcblx0PC9zZWN0aW9uPlxyXG5gO1xyXG5cclxuLy8gQ2xhc3NlIMOgIGNvbXBsw6l0ZXIuLi5cclxuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzSUhNIGV4dGVuZHMgQ29tcG9uZW50SUhNIHtcclxuXHR1bFx0ICAgIDogSFRNTFVMaXN0RWxlbWVudDtcclxuXHRmb3JtICAgIDogSFRNTEZvcm1FbGVtZW50O1xyXG5cdGlucHV0ICAgOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgbWFwTmZJaG06IE1hcDxDaG9zZSwgQ2hvc2VJSE0+ID0gbmV3IE1hcCgpO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBORjogTGlzdGVDaG9zZXMsIHJvb3RTZWxlY3Rvcikge1xyXG5cdFx0c3VwZXIoTkYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHJvb3RTZWxlY3RvciApKTtcclxuICAgICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gaHRtbFRlbXBsYXRlO1xyXG5cclxuICAgICAgICAvLyBHZXQgcmVmZXJlbmNlcyBhbmQgaW5pdGlhbGl6ZSBmcm9tIE5GXHJcbiAgICAgICAgdGhpcy51bFx0ICAgID0gPEhUTUxVTGlzdEVsZW1lbnQ+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGB1bGAgKTtcclxuICAgICAgICB0aGlzLmZvcm0gICA9IDxIVE1MRm9ybUVsZW1lbnQgPnRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCBgZm9ybWAgKTtcclxuICAgICAgICB0aGlzLmlucHV0ICA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCBgaW5wdXRgICk7XHJcbiAgICAgICAgdGhpcy5pbml0YWxpemVGcm9tTkYoKTtcclxuXHJcbiAgICAgICAgLy8gSFRNTCAtPiBORlxyXG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2dCA9PiB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLk5GLkFqb3V0ZXIoIHRoaXMuaW5wdXQudmFsdWUgKTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE5GIC0+IEhUTUxcclxuICAgICAgICB0aGlzLk5GLm9uKCBcInVwZGF0ZVwiLCAobmYsIGVOLCBlVikgPT4gdGhpcy51cGRhdGVGcm9tTkYoZVYpICk7XHJcbiAgICB9XHJcbiAgICBpbml0YWxpemVGcm9tTkYoKSB7XHJcbiAgICAgICAgdGhpcy5ORi5jaG9zZXMuZm9yRWFjaCggYyA9PiB0aGlzLnVwZGF0ZUZyb21ORigge2FwcGVuZDogY30gKSApO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlRnJvbU5GKGV2dDogRXZlbnRMaXN0ZUNob3Nlcykge1xyXG4gICAgICAgIGlmKGV2dC5hcHBlbmQpIHtcclxuICAgICAgICAgICAgbGV0IGNob3NlICAgPSBldnQuYXBwZW5kO1xyXG4gICAgICAgICAgICBsZXQgbGkgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwibGlcIiApO1xyXG4gICAgICAgICAgICB0aGlzLnVsLmFwcGVuZENoaWxkKCBsaSApO1xyXG4gICAgICAgICAgICB0aGlzLm1hcE5mSWhtLnNldChjaG9zZSwgbmV3IENob3NlSUhNKGNob3NlLCBsaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldnQucmVtb3ZlKSB7XHJcbiAgICAgICAgICAgIGxldCBjaG9zZSAgICAgICA9IGV2dC5yZW1vdmU7XHJcbiAgICAgICAgICAgIGxldCBjaG9zZUlITSAgICA9IHRoaXMubWFwTmZJaG0uZ2V0KGNob3NlKTtcclxuICAgICAgICAgICAgaWYoY2hvc2VJSE0pIHtjaG9zZUlITS5kaXNwb3NlKCk7fVxyXG4gICAgICAgICAgICB0aGlzLm1hcE5mSWhtLmRlbGV0ZShjaG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
