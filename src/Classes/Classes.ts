abstract class Entity {
    protected name: string;

    constructor(name: string) {
    this.name = name;
    }

    abstract logInfo(): void;
    abstract getInfo(): string;
}

interface Mountain {
    height: number;
}

interface BodyOfWater {
    area: number;
}

export class Country extends Entity implements BodyOfWater {
    area: number;

    constructor(name: string, area: number) {
    super(name);
    this.area = area;
    }

    logInfo() {
    console.log(`Country: ${this.name}`);
    console.log(`Area: ${this.area} square kilometers`);
    }

    getInfo(): string  {
        return `Country: ${this.name} Area: ${this.area} square kilometers`
    }
}

export class MountainRange extends Entity implements Mountain {
    height: number;

    constructor(name: string, height: number) {
    super(name);
    this.height = height;
    }

    logInfo() {
    console.log(`Mountain Range: ${this.name}`);
    console.log(`Height: ${this.height} meters`);
    }

    getInfo(): string  {
        return `Mountain Range: ${this.name} Height: ${this.height} meters`
    }
}

export class Lake extends Entity implements BodyOfWater {
    area: number;

    constructor(name: string, area: number) {
    super(name);
    this.area = area;
    }

    logInfo() {
    console.log(`Lake: ${this.name}`);
    console.log(`Area: ${this.area} square kilometers`);
    }

    getInfo(): string  {
        return `Lake: ${this.name} Area: ${this.area} square kilometers`
    }
}

export class Republic extends Entity implements BodyOfWater {
    area: number;

    constructor(name: string, area: number) {
    super(name);
    this.area = area;
    }

    logInfo() {
    console.log(`Republic: ${this.name}`);
    console.log(`Area: ${this.area} square kilometers`);
    }

    getInfo(): string  {
        return `Republic: ${this.name} Area: ${this.area} square kilometers`
    }
}

export class Sea extends Entity implements BodyOfWater {
    area: number;

    constructor(name: string, area: number) {
    super(name);
    this.area = area;
    }

    logInfo() {
    console.log(`Sea: ${this.name}`);
    console.log(`Area: ${this.area} square kilometers`);
    }

    getInfo(): string  {
        return `Sea: ${this.name} Area: ${this.area} square kilometers`
    }
}
