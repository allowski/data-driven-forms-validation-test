import type {Card} from "./card.ts";

export type Player = {
    id: string;
    name: string;
    score: number;
    cards: Card[];
}
