import { RecipeService } from './recipe.service';
import { RecipeCredentialsDto } from './dto/recipe-credentials.dto';
import { Recipe } from './recipe.entity';
import { ResponseObject } from 'src/response/responseObject';
export declare class RecipeController {
    private recipeService;
    constructor(recipeService: RecipeService);
    getAllRecipes(): Promise<Recipe[]>;
    addRecipe(recipeCredentialsDto: RecipeCredentialsDto): Promise<void>;
    getRecipeByID(id: string): Promise<Recipe>;
    update(info: Recipe, id: string): Promise<ResponseObject>;
    delete(id: string): Promise<ResponseObject>;
}
