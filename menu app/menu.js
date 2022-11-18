class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age}.`;
    }
}

class Species {
    constructor(name) {
        this.name = name;
        this.animals = [];
    }

    addAnimal(animal) {
        if (animal instanceof Animal) {
            this.animals = [];
        } else {
            throw new Error(`You can only add an instance of Animal. Argument is not an animal: ${animal}`);
        }
    }

    describe() {
        return `${this.name} has ${this.animals.length} animals.`;
    }
}


class Menu {
    constructor() {
        this.breeds = [];
        this.selectedSpecies = null;
    }


    start() {
        let selection = this.showMainMenuOptions();
        while(selection != 0) {
            switch (selection) {
                case '1':
                    this.createSpecies();
                    break;
                case '2':
                    this.viewSpecies();
                    break;
                case '3':
                    this.deleteSpecies();
                    break;
                case '4':
                    this.displayBreeds();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new species
        2) view species
        3) delete species
        4) display all breeds
        `);
    }

    showSpeciesMenuOptions(speciesInfo) {
        return prompt(`
          0) back
          1) create animal
          2) delete animal
          ---------------------
        ${speciesInfo}
        `);
    }

    displayBreeds() {
        let animalString = '';
        for(let i = 0; i <this.breeds.length; i++) {
            animalString += i + ') ' + this.breeds[i].name + '\n';
        }
        alert(animalString);
    }

    createSpecies() {
        let name = prompt('Enter name for new species');
        this.breeds.push(new Species(name));
    }

    viewSpecies() {
        let index = prompt('Enter the index of the species you wish to view:');
        if (index > -1 && index < this.breeds.length) {
            this.selectedSpecies = this.breeds[index];
            let discription = 'Species Name: ' + this.selectedSpecies.name + '\n';
            for( let i = 0; i < this.selectedSpecies.animals.length; i++) {
                discription += i + ') ' + this.selectedSpecies.animals[i].name + 
                  ' - ' + this.selectedSpecies.animals[i].age + '\n' ;
                
            }
            let selection = this.showSpeciesMenuOptions(discription);
            switch (selection) {
                case '1':
                    this.createAnimal();
                    break;
                case '2':
                    this.deleteAnimal();
            }
        }
    }

    deleteSpecies() {
        let index = prompt('Enter the index of the species you want to delete:');
        if (index > -1 && index < this.breeds.length) {
            this.breeds.splice(index, 1);
        }
    }

    createAnimal() {
        let name = prompt('Enter name for new animal:');
        let type = prompt('Enter age of new animal:');
        this.selectedSpecies.breeds.push(new Animal(name, age));
    }

    deleteAnimal() {
        let index = prompt('Enter the index of the animal you wish to delete:');
        if (index > -1 && index < this.selectedSpecies.breeds.length) {
            this.selectedSpecies.breeds.splice(index, 1);
        }
    }

}
    

let menu = new Menu();
menu.start();