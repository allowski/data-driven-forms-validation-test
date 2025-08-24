import type {Player} from "./player.ts";

export type Game = {
    id: string;
    players: Player[];
    admin: Player;
    currentAsker?: Player;
    currentAnswerer?: Player;
    currentBet?: number;
    currentBetter?: Player;
};
