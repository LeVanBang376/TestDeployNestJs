import { Ingredient } from '../ingredient/ingredient.entity';
export declare class Recipe {
    id: string;
    recipeName: string;
    recipeImage: string;
    ingredients: Ingredient[];
    instructions: string;
    authorNote: string;
    isPublic: boolean;
    authorId: string;
}
