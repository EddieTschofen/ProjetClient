System.register(["@angular/core", "@angular/platform-browser", "./components/ListeChosesModule", "@angular/platform-browser-dynamic"], function (exports_1, context_1) {
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
    var core_1, platform_browser_1, ListeChosesModule_1, platform_browser_dynamic_1, PromesseDocumentPret, CompDemoM2M, AppModule, platform;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ListeChosesModule_1_1) {
                ListeChosesModule_1 = ListeChosesModule_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }
        ],
        execute: function () {
            PromesseDocumentPret = new Promise((resolve) => {
                if (document.readyState === "complete") {
                    resolve();
                }
                else {
                    document.body.onload = () => resolve();
                }
            });
            CompDemoM2M = class CompDemoM2M {
            };
            CompDemoM2M = __decorate([
                core_1.Component({
                    selector: "demo-m2m",
                    template: `<liste-choses titre="TODO List"></liste-choses>`
                })
            ], CompDemoM2M);
            AppModule = class AppModule {
                constructor() {
                    // Juste pour bien lier la version sans framework
                    /*let Pall = Promise.all([ListeChosesService.getData(), PromesseDocumentPret]);
                    Pall.then( ([nf]) => {
                        new ListeChosesIHM(nf, "#sansFramework");
                    });*/
                }
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, ListeChosesModule_1.ListeChosesModule],
                    declarations: [CompDemoM2M],
                    bootstrap: [CompDemoM2M]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(AppModule);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRSSxvQkFBb0IsR0FBRyxJQUFJLE9BQU8sQ0FBRSxDQUFDLE9BQU87Z0JBQzVDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFPRyxXQUFXLEdBQWpCO2FBQW9CLENBQUE7WUFBZCxXQUFXO2dCQUpoQixnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxVQUFVO29CQUN0QixRQUFRLEVBQUksaURBQWlEO2lCQUNoRSxDQUFDO2VBQ0ksV0FBVyxDQUFHO1lBT1AsU0FBUyxHQUF0QjtnQkFDSTtvQkFDSSxpREFBaUQ7b0JBQ2pEOzs7eUJBR0s7Z0JBQ1QsQ0FBQzthQUNKLENBQUE7WUFSWSxTQUFTO2dCQUxyQixlQUFRLENBQUM7b0JBQ04sT0FBTyxFQUFPLENBQUUsZ0NBQWEsRUFBRSxxQ0FBaUIsQ0FBRTtvQkFDbEQsWUFBWSxFQUFFLENBQUUsV0FBVyxDQUFFO29CQUM3QixTQUFTLEVBQUssQ0FBRSxXQUFXLENBQUU7aUJBQ2hDLENBQUM7O2VBQ1csU0FBUyxDQVFyQjs7WUFFSyxRQUFRLEdBQUcsaURBQXNCLEVBQUUsQ0FBQztZQUMxQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUgfSAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSAgICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IExpc3RlQ2hvc2VzTW9kdWxlIH0gICAgICAgIGZyb20gXCIuL2NvbXBvbmVudHMvTGlzdGVDaG9zZXNNb2R1bGVcIjtcclxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9ICAgZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiO1xyXG5pbXBvcnQgeyBMaXN0ZUNob3Nlc0lITSAgICAgfSBmcm9tIFwiLi9zYW5zRnJhbWV3b3JrL2xpc3RlQ2hvc2VzX0lITVwiO1xyXG5pbXBvcnQgeyBMaXN0ZUNob3Nlc1NlcnZpY2UgfSBmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvc2VydmljZVwiO1xyXG5cclxuXHJcbmxldCBQcm9tZXNzZURvY3VtZW50UHJldCA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgaWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3Rvclx0XHQ6IFwiZGVtby1tMm1cIixcclxuICAgIHRlbXBsYXRlXHRcdDogYDxsaXN0ZS1jaG9zZXMgdGl0cmU9XCJUT0RPIExpc3RcIj48L2xpc3RlLWNob3Nlcz5gXHJcbn0pXHJcbmNsYXNzIENvbXBEZW1vTTJNIHt9XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogICAgICBbIEJyb3dzZXJNb2R1bGUsIExpc3RlQ2hvc2VzTW9kdWxlIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFsgQ29tcERlbW9NMk0gXSxcclxuICAgIGJvb3RzdHJhcDogICAgWyBDb21wRGVtb00yTSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gSnVzdGUgcG91ciBiaWVuIGxpZXIgbGEgdmVyc2lvbiBzYW5zIGZyYW1ld29ya1xyXG4gICAgICAgIC8qbGV0IFBhbGwgPSBQcm9taXNlLmFsbChbTGlzdGVDaG9zZXNTZXJ2aWNlLmdldERhdGEoKSwgUHJvbWVzc2VEb2N1bWVudFByZXRdKTtcclxuICAgICAgICBQYWxsLnRoZW4oIChbbmZdKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBMaXN0ZUNob3Nlc0lITShuZiwgXCIjc2Fuc0ZyYW1ld29ya1wiKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKTtcclxucGxhdGZvcm0uYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
