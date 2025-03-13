/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Pokemon {
  public name: string;
  public type: string;
  public level: number;
  public attacks: string[];

  constructor(name: string, type: string, level: number, attacks: string[]) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.attacks = attacks;
  }

  // Método para clonar el Pokémon
  clone(): Pokemon {
   return new Pokemon(this.name, this.type, this.level, [... this.attacks])
  }

  displayInfo(): void {
    console.log(
      `Nombre: ${this.name}\nTipo: ${this.type}\nNivel: ${
        this.level
      }\nAtaques: ${this.attacks.join(', ')}`
    );
  }
}

function main () {
  const pokemonBase = new Pokemon('Charmander', 'Fuego', 1, ['Llamarada', 'Arañazo']);

  console.log({pokemonBase});
  pokemonBase.displayInfo();

  const pokemon2 = pokemonBase.clone();
  pokemon2.name = 'Picachu';
  pokemon2.level = 16;
  pokemon2.attacks.push("Electricidad");

  console.log({pokemon2});
  pokemon2.displayInfo();
}

main();
