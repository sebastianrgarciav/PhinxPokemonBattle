import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) { }

  async onModuleInit() {
    const count = await this.pokemonRepository.count();
    if (count === 0) {
      const pokemons = [
        { name: 'Pikachu', attack: 4, defense: 3, hp: 3, speed: 6, type: 'Electric', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png' },
        { name: 'Charmander', attack: 4, defense: 3, hp: 3, speed: 4, type: 'Fire', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png' },
        { name: 'Squirtle', attack: 3, defense: 4, hp: 3, speed: 3, type: 'Water', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png' },
        { name: 'Bulbasaur', attack: 4, defense: 3, hp: 3, speed: 3, type: 'Grass', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png' },
        { name: 'Eevee', attack: 4, defense: 3, hp: 4, speed: 5, type: 'Normal', imageUrl: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png' },
      ];
      await this.pokemonRepository.save(pokemons);
    }
  }

  findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  findOne(id: number): Promise<Pokemon> {
    return this.pokemonRepository.findOneBy({ id });
  }
}
