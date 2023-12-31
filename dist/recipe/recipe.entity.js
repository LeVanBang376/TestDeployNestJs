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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const typeorm_1 = require("typeorm");
let Recipe = class Recipe {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Recipe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "recipeName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "recipeImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', default: [] }),
    __metadata("design:type", Array)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "instructions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "authorNote", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Recipe.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "authorId", void 0);
Recipe = __decorate([
    (0, typeorm_1.Entity)()
], Recipe);
exports.Recipe = Recipe;
//# sourceMappingURL=recipe.entity.js.map