import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor (
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly originalTitle: string,
    readonly format: string,
    readonly releaseYear: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string[],
    readonly duration: number,
  ) { }
}
