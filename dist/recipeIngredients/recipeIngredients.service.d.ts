import { RecipeIngredients } from './recipeIngredients.entity';
import { Repository } from 'typeorm';
export declare class RecipeIngredientsService {
    private recipeIngredientsRepository;
    constructor(recipeIngredientsRepository: Repository<RecipeIngredients>);
}
