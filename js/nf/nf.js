System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NF, Chose, ListeChoses;
    return {
        setters: [],
        execute: function () {
            NF = class NF {
                constructor() {
                    this.cbList = new Map();
                }
                emit(eventName, value) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.forEach(cb => cb(this, eventName, value));
                    }
                    return this;
                }
                on(eventName, cb) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.push(cb);
                    }
                    else {
                        this.cbList.set(eventName, [cb]);
                    }
                    return this;
                }
                off(eventName, cb) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.splice(array.indexOf(cb), 1);
                    }
                    return this;
                }
            };
            Chose = class Chose extends NF {
                constructor(texte, liste, fait = false, date = null) {
                    super();
                    this.texte = texte;
                    this.date = date || new Date(Date.now());
                    this.fait = fait || false;
                    this.liste = liste;
                }
                dispose() {
                    this.liste.Retirer(this);
                }
                Texte(texte) {
                    this.texte = texte;
                    this.emit("update", { texte: texte });
                    return this;
                }
                Fait(fait) {
                    this.fait = fait;
                    this.emit("update", { fait: fait });
                    return this;
                }
                on(eventName, cb) {
                    return super.on(eventName, cb);
                }
                off(eventName, cb) {
                    return super.off(eventName, cb);
                }
            };
            exports_1("Chose", Chose);
            ListeChoses = class ListeChoses extends NF {
                constructor() {
                    super();
                    this.choses = [];
                }
                Ajouter(texte, fait = false, date = null) {
                    let chose = new Chose(texte, this, fait, date);
                    this.choses.push(chose);
                    this.emit("update", { append: chose });
                    return this;
                }
                Retirer(chose) {
                    this.choses.splice(this.choses.indexOf(chose), 1);
                    this.emit("update", { remove: chose });
                    return this;
                }
                on(eventName, cb) {
                    return super.on(eventName, cb);
                }
                off(eventName, cb) {
                    return super.off(eventName, cb);
                }
            };
            exports_1("ListeChoses", ListeChoses);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFJLENBQUM7Z0JBQ2IsQ0FBQztnQkFDRCxFQUFFLENBQUMsU0FBbUIsRUFBRSxFQUEwQjtvQkFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUNELEdBQUcsQ0FBQyxTQUFtQixFQUFFLEVBQTBCO29CQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7YUFDRCxDQUFBOztRQUNELENBQUMiLCJmaWxlIjoibmYvbmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIE5GX0NhbGxCYWNrID0gKG5mOiBORiwgZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWQ7XHJcbmNsYXNzIE5GIHtcclxuXHRwcml2YXRlIGNiTGlzdCA6IE1hcDxzdHJpbmcsIE5GX0NhbGxCYWNrW10+O1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5jYkxpc3QgPSBuZXcgTWFwPHN0cmluZywgTkZfQ2FsbEJhY2tbXT4oKTtcclxuXHJcblx0fVxyXG5cdGVtaXQoZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIDogdGhpcyB7XHJcblx0XHRpZiggdGhpcy5jYkxpc3QuaGFzKGV2ZW50TmFtZSkgKSB7XHJcblx0XHRcdGxldCBhcnJheSA9IHRoaXMuY2JMaXN0LmdldChldmVudE5hbWUpO1xyXG5cdFx0XHRhcnJheS5mb3JFYWNoKCBjYiA9PiBjYih0aGlzLCBldmVudE5hbWUsIHZhbHVlKSApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogTkZfQ2FsbEJhY2spIDogdGhpcyB7XHJcblx0XHRpZiggdGhpcy5jYkxpc3QuaGFzKGV2ZW50TmFtZSkgKSB7XHJcblx0XHRcdGxldCBhcnJheSA6IE5GX0NhbGxCYWNrW10gPSB0aGlzLmNiTGlzdC5nZXQoZXZlbnROYW1lKTtcclxuXHRcdFx0YXJyYXkucHVzaChjYik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmNiTGlzdC5zZXQoZXZlbnROYW1lLCBbY2JdKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBORl9DYWxsQmFjaykgOiB0aGlzIHtcclxuXHRcdGlmKCB0aGlzLmNiTGlzdC5oYXMoZXZlbnROYW1lKSApIHtcclxuXHRcdFx0bGV0IGFycmF5ID0gdGhpcy5jYkxpc3QuZ2V0KGV2ZW50TmFtZSk7XHJcblx0XHRcdGFycmF5LnNwbGljZSggYXJyYXkuaW5kZXhPZihjYiksIDEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFdmVudENob3NlID0ge1xyXG5cdGZhaXQ/XHQ6IGJvb2xlYW4sXHJcblx0dGV4dGU/XHQ6IHN0cmluZ1xyXG59O1xyXG5leHBvcnQgdHlwZSBORl9DaG9zZV9DYWxsQmFjayA9IChuZjogQ2hvc2UsIGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogRXZlbnRDaG9zZSkgPT4gdm9pZDtcclxuZXhwb3J0IGNsYXNzIENob3NlIGV4dGVuZHMgTkYge1xyXG5cdHJlYWRvbmx5IGxpc3RlXHRcdDogTGlzdGVDaG9zZXM7XHJcblx0cmVhZG9ubHkgZGF0ZSBcdFx0OiBEYXRlO1xyXG5cdHRleHRlXHRcdFx0XHQ6IHN0cmluZztcclxuXHRmYWl0IFx0XHRcdFx0OiBib29sZWFuO1xyXG5cdGNvbnN0cnVjdG9yXHQodGV4dGU6IHN0cmluZywgbGlzdGU6IExpc3RlQ2hvc2VzLCBmYWl0OiBib29sZWFuID0gZmFsc2UsIGRhdGU6IERhdGUgPSBudWxsKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50ZXh0ZSAgPSB0ZXh0ZTtcclxuXHRcdHRoaXMuZGF0ZVx0PSBkYXRlIHx8IG5ldyBEYXRlKCBEYXRlLm5vdygpICk7XHJcblx0XHR0aGlzLmZhaXRcdD0gZmFpdCB8fCBmYWxzZTtcclxuXHRcdHRoaXMubGlzdGVcdD0gbGlzdGU7XHJcblx0fVxyXG5cdGRpc3Bvc2VcdFx0KCkge1xyXG5cdFx0dGhpcy5saXN0ZS5SZXRpcmVyKHRoaXMpO1xyXG5cdH1cclxuXHRUZXh0ZSh0ZXh0ZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRleHRlID0gdGV4dGU7XHJcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge3RleHRlOiB0ZXh0ZX0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdEZhaXQoZmFpdDogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5mYWl0ID0gZmFpdDtcclxuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB7ZmFpdDogZmFpdH0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdG9uKGV2ZW50TmFtZTogXCJ1cGRhdGVcIiwgY2I6IE5GX0Nob3NlX0NhbGxCYWNrKSA6IHRoaXMge1xyXG5cdFx0cmV0dXJuIHN1cGVyLm9uKGV2ZW50TmFtZSwgY2IpO1xyXG5cdH1cclxuXHRvZmYoZXZlbnROYW1lOiBcInVwZGF0ZVwiLCBjYjogTkZfQ2hvc2VfQ2FsbEJhY2spIDogdGhpcyB7XHJcblx0XHRyZXR1cm4gc3VwZXIub2ZmKGV2ZW50TmFtZSwgY2IpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRXZlbnRMaXN0ZUNob3NlcyA9IHthcHBlbmQ/OiBDaG9zZSwgcmVtb3ZlPzpDaG9zZX07XHJcbmV4cG9ydCB0eXBlIE5GX0xpc3RlQ2hvc2VfQ2FsbEJhY2sgPSAobmY6IExpc3RlQ2hvc2VzLCBldmVudE5hbWU6IHN0cmluZywgdmFsdWU6IEV2ZW50TGlzdGVDaG9zZXMpID0+IHZvaWQ7XHJcbmV4cG9ydCBjbGFzcyBMaXN0ZUNob3NlcyBleHRlbmRzIE5GIHtcclxuXHRjaG9zZXMgXHQ6IENob3NlW107XHJcblx0Y29uc3RydWN0b3JcdCgpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNob3NlcyA9IFtdO1xyXG5cdH1cclxuXHRBam91dGVyXHRcdCh0ZXh0ZTogc3RyaW5nLCBmYWl0OiBib29sZWFuID0gZmFsc2UsIGRhdGU6IERhdGUgPSBudWxsKSA6IHRoaXMge1xyXG5cdFx0bGV0IGNob3NlID0gbmV3IENob3NlKHRleHRlLCB0aGlzLCBmYWl0LCBkYXRlKTtcclxuXHRcdHRoaXMuY2hvc2VzLnB1c2goIGNob3NlICk7XHJcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge2FwcGVuZDogY2hvc2V9KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRSZXRpcmVyXHRcdChjaG9zZTogQ2hvc2UpIDogdGhpcyB7XHJcblx0XHR0aGlzLmNob3Nlcy5zcGxpY2UoIHRoaXMuY2hvc2VzLmluZGV4T2YoY2hvc2UpLCAxICk7XHJcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge3JlbW92ZTogY2hvc2V9KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRvbihldmVudE5hbWU6IFwidXBkYXRlXCIsIGNiOiBORl9MaXN0ZUNob3NlX0NhbGxCYWNrKSA6IHRoaXMge1xyXG5cdFx0cmV0dXJuIHN1cGVyLm9uKGV2ZW50TmFtZSwgY2IpO1xyXG5cdH1cclxuXHRvZmYoZXZlbnROYW1lOiBcInVwZGF0ZVwiLCBjYjogTkZfTGlzdGVDaG9zZV9DYWxsQmFjaykgOiB0aGlzIHtcclxuXHRcdHJldHVybiBzdXBlci5vZmYoZXZlbnROYW1lLCBjYik7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
