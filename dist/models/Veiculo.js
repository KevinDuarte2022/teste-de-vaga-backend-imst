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
exports.Veiculo = void 0;
const typeorm_1 = require("typeorm");
const Apartamento_1 = require("./Apartamento");
let Veiculo = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _id_apartamento_decorators;
    let _id_apartamento_initializers = [];
    let _id_apartamento_extraInitializers = [];
    let _marca_decorators;
    let _marca_initializers = [];
    let _marca_extraInitializers = [];
    let _modelo_decorators;
    let _modelo_initializers = [];
    let _modelo_extraInitializers = [];
    let _cor_decorators;
    let _cor_initializers = [];
    let _cor_extraInitializers = [];
    let _placa_decorators;
    let _placa_initializers = [];
    let _placa_extraInitializers = [];
    var Veiculo = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.id_apartamento = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _id_apartamento_initializers, void 0));
            this.marca = (__runInitializers(this, _id_apartamento_extraInitializers), __runInitializers(this, _marca_initializers, void 0));
            this.modelo = (__runInitializers(this, _marca_extraInitializers), __runInitializers(this, _modelo_initializers, void 0));
            this.cor = (__runInitializers(this, _modelo_extraInitializers), __runInitializers(this, _cor_initializers, void 0));
            this.placa = (__runInitializers(this, _cor_extraInitializers), __runInitializers(this, _placa_initializers, void 0));
            __runInitializers(this, _placa_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Veiculo");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _id_apartamento_decorators = [(0, typeorm_1.ManyToOne)(() => Apartamento_1.Apartamento, apartamento => apartamento.id)];
        _marca_decorators = [(0, typeorm_1.Column)()];
        _modelo_decorators = [(0, typeorm_1.Column)()];
        _cor_decorators = [(0, typeorm_1.Column)()];
        _placa_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _id_apartamento_decorators, { kind: "field", name: "id_apartamento", static: false, private: false, access: { has: obj => "id_apartamento" in obj, get: obj => obj.id_apartamento, set: (obj, value) => { obj.id_apartamento = value; } }, metadata: _metadata }, _id_apartamento_initializers, _id_apartamento_extraInitializers);
        __esDecorate(null, null, _marca_decorators, { kind: "field", name: "marca", static: false, private: false, access: { has: obj => "marca" in obj, get: obj => obj.marca, set: (obj, value) => { obj.marca = value; } }, metadata: _metadata }, _marca_initializers, _marca_extraInitializers);
        __esDecorate(null, null, _modelo_decorators, { kind: "field", name: "modelo", static: false, private: false, access: { has: obj => "modelo" in obj, get: obj => obj.modelo, set: (obj, value) => { obj.modelo = value; } }, metadata: _metadata }, _modelo_initializers, _modelo_extraInitializers);
        __esDecorate(null, null, _cor_decorators, { kind: "field", name: "cor", static: false, private: false, access: { has: obj => "cor" in obj, get: obj => obj.cor, set: (obj, value) => { obj.cor = value; } }, metadata: _metadata }, _cor_initializers, _cor_extraInitializers);
        __esDecorate(null, null, _placa_decorators, { kind: "field", name: "placa", static: false, private: false, access: { has: obj => "placa" in obj, get: obj => obj.placa, set: (obj, value) => { obj.placa = value; } }, metadata: _metadata }, _placa_initializers, _placa_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Veiculo = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Veiculo = _classThis;
})();
exports.Veiculo = Veiculo;
