class Key {
  private signature: number = Math.random();

  getSignature = (): number => this.signature;
}

interface IPerson {
  readonly key: Key;
  getKey(): Key;
}

class Person implements IPerson {
  constructor(public key: Key) {}

  getKey = (): Key => this.key;
}

abstract class House {
  protected isDoorOpen: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn = (tenants: Person): void => {
    if (this.isDoorOpen) {
      this.tenants.push(tenants);
    } else {
      console.log('If you are drunk or are you mistaken, but this is a stranger`s house!');
    }
  };

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.isDoorOpen = true;
      this.comeIn(person);
    }
    this.isDoorOpen = false;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

export {};
