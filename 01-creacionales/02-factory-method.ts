import { COLORS } from '../helpers/colors.ts';
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */
interface Hamburger {
    prepare(): void;

}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburguesa de pollo', COLORS.yellow);
  }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
      console.log('Preparando una hamburguesa de res', COLORS.brown);
    }
  }

class BeenHamburger implements Hamburger {
    prepare(): void {
      console.log('Preparando una hamburguesa de been', COLORS.brown);
    }
  }

abstract class Restaurant {
    abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburger = this.createHamburger();
        hamburger.prepare()
    }
}

class ChickenRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
      return new ChickenHamburger();
    }
}

class BeefRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
      return new BeefHamburger();
    }
}

class BeenRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
      return new BeenHamburger();
    }
}

function main() {
    let restaurant: Restaurant;
     
    const burgerType = prompt('¿Qué tipo de hamburguesa quieres?(chicken/beef/been)')

    switch( burgerType ) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
        break;
        case 'beef':
            restaurant = new BeefRestaurant();
        break;

        case 'been':
            restaurant = new BeenRestaurant();
        break;

        default:
            throw new Error('Opción no válida')
    }

    restaurant.orderHamburger();
}

main()