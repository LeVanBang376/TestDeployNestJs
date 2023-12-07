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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const recipe_entity_1 = require("./recipe.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const responseObject_1 = require("../response/responseObject");
let RecipeService = class RecipeService {
    constructor(recipesRepository) {
        this.recipesRepository = recipesRepository;
    }
    async getAllRecipes() {
        const allRecipes = await this.recipesRepository.find();
        if (!allRecipes)
            throw new common_1.NotFoundException(`Recipes not found`);
        return allRecipes;
    }
    async addRecipe(recipeCredentialsDto) {
        const { recipeName, recipeImage, ingredients, instructions, authorNote, isPublic, authorId } = recipeCredentialsDto;
        const recipe = this.recipesRepository.create({
            recipeName,
            recipeImage,
            ingredients,
            instructions,
            authorNote,
            isPublic,
            authorId,
        });
        try {
            await this.recipesRepository.save(recipe);
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Recipe already exists');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async getRecipeByID(recipe_id) {
        const recipe = await this.recipesRepository.findOne({
            where: {
                id: recipe_id,
            },
        });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with id ${recipe_id} not found`);
        }
        return recipe;
    }
    async update(info, recipe_id) {
        const recipe = await this.recipesRepository.findOne({
            where: {
                id: recipe_id,
            },
        });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with id ${recipe_id} not found`);
        }
        var { recipeName, recipeImage, ingredients, instructions, authorNote, isPublic } = info;
        if (!recipeName)
            recipeName = recipe.recipeName;
        if (!recipeImage)
            recipeImage = recipe.recipeImage;
        if (!ingredients)
            ingredients = recipe.ingredients;
        if (!instructions)
            instructions = recipe.instructions;
        if (!authorNote)
            authorNote = recipe.authorNote;
        if (!isPublic)
            isPublic = recipe.isPublic;
        const newRecipe = await this.recipesRepository.update({ id: recipe_id }, {
            recipeName,
            recipeImage,
            ingredients,
            instructions,
            authorNote,
            isPublic,
        });
        return new responseObject_1.ResponseObject(200, 'Update recipe successfully', info);
    }
    async delete(recipe_id) {
        const recipe = await this.recipesRepository.findOne({
            where: {
                id: recipe_id,
            },
        });
        if (!recipe) {
            return new responseObject_1.ResponseObject(404, `Recipe with id ${recipe_id} not found`, {});
        }
        await this.recipesRepository.delete({ id: recipe_id });
        return new responseObject_1.ResponseObject(200, 'Delete recipe successfully', {});
    }
    async updateOfUser(recipe_id, status, offset, itemToUpdate) {
        const recipe = await this.recipesRepository.findOne({
            where: {
                id: recipe_id,
            },
        });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with id ${recipe_id} not found`);
        }
        const newRecipe = await this.recipesRepository.update({ id: recipe_id }, {
            recipeName: itemToUpdate.recipeName,
        });
        return new responseObject_1.ResponseObject(200, 'Update recipe successfully', newRecipe);
    }
};
RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recipe_entity_1.Recipe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map