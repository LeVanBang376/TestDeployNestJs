import { RecipeCredentialsDto } from './dto/recipe-credentials.dto';
import { Recipe } from './recipe.entity';
import { Repository } from 'typeorm';
import { ResponseObject } from 'src/response/responseObject';
import { ItemToUpdate } from './itemToUpdate.entity';
export declare class RecipeService {
    private recipesRepository;
    constructor(recipesRepository: Repository<Recipe>);
    getAllRecipes(): Promise<Recipe[]>;
    addRecipe(recipeCredentialsDto: RecipeCredentialsDto): Promise<void>;
    getRecipeByID(recipe_id: string): Promise<Recipe>;
    update(info: Recipe, recipe_id: string): Promise<ResponseObject>;
    delete(recipe_id: string): Promise<ResponseObject>;
    updateOfUser(recipe_id: string, status: string, offset: number, itemToUpdate: ItemToUpdate): Promise<ResponseObject>;
}
