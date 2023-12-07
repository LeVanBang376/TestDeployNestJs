import { Ingredient } from '../../ingredient/ingredient.entity';
export declare class RecipeCredentialsDto {
    recipeName: string;
    recipeImage: string;
    ingredients: Ingredient[];
    instructions: string;
    authorNote: string;
    isPublic: boolean;
    authorId: string;
}
