import { Ingredient } from './ingredient.entity';
import { Repository } from 'typeorm';
export declare class IngredientService {
    private ingredientsRepository;
    constructor(ingredientsRepository: Repository<Ingredient>);
}
