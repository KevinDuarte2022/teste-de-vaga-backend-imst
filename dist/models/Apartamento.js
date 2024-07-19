"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartamento = void 0;
const typeorm_1 = require("typeorm");
let Apartamento = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _bloco_decorators;
    let _bloco_initializers = [];
    let _bloco_extraInitializers = [];
    let _apartamento_decorators;
    let _apartamento_initializers = [];
    let _apartamento_extraInitializers = [];
    let _morador_decorators;
    let _morador_initializers = [];
    let _morador_extraInitializers = [];
    let _telefone_decorators;
    let _telefone_initializers = [];
    let _telefone_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    var Apartamento = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.bloco = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _bloco_initializers, void 0));
            this.apartamento = (__runInitializers(this, _bloco_extraInitializers), __runInitializers(this, _apartamento_initializers, void 0));
            this.morador = (__runInitializers(this, _apartamento_extraInitializers), __runInitializers(this, _morador_initializers, void 0));
            this.telefone = (__runInitializers(this, _morador_extraInitializers), __runInitializers(this, _telefone_initializers, void 0));
            this.email = (__runInitializers(this, _telefone_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            __runInitializers(this, _email_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Apartamento");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _bloco_decorators = [(0, typeorm_1.Column)()];
        _apartamento_decorators = [(0, typeorm_1.Column)()];
        _morador_decorators = [(0, typeorm_1.Column)()];
        _telefone_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _bloco_decorators, { kind: "field", name: "bloco", static: false, private: false, access: { has: obj => "bloco" in obj, get: obj => obj.bloco, set: (obj, value) => { obj.bloco = value; } }, metadata: _metadata }, _bloco_initializers, _bloco_extraInitializers);
        __esDecorate(null, null, _apartamento_decorators, { kind: "field", name: "apartamento", static: false, private: false, access: { has: obj => "apartamento" in obj, get: obj => obj.apartamento, set: (obj, value) => { obj.apartamento = value; } }, metadata: _metadata }, _apartamento_initializers, _apartamento_extraInitializers);
        __esDecorate(null, null, _morador_decorators, { kind: "field", name: "morador", static: false, private: false, access: { has: obj => "morador" in obj, get: obj => obj.morador, set: (obj, value) => { obj.morador = value; } }, metadata: _metadata }, _morador_initializers, _morador_extraInitializers);
        __esDecorate(null, null, _telefone_decorators, { kind: "field", name: "telefone", static: false, private: false, access: { has: obj => "telefone" in obj, get: obj => obj.telefone, set: (obj, value) => { obj.telefone = value; } }, metadata: _metadata }, _telefone_initializers, _telefone_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Apartamento = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Apartamento = _classThis;
})();
exports.Apartamento = Apartamento;
