import Buyable from './Buyable';

export default class Movie {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly country: string,
    readonly slogan: string,
    readonly year: number,
    readonly genre: string[],
    readonly duration: string,
    readonly price: number
  ) {}
}
