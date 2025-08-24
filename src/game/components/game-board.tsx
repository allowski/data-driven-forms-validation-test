import type {Player} from "../types/player.ts";
import type {Game} from "../types/game.ts";
import {GameTable} from "./game-table.tsx";
import {PlayerAvatar} from "./player-avatar.tsx";

const players: Player[] = [
    {
        id: 'player-1',
        name: 'Player 1',
        score: 0,
        cards: []
    },
    {
        id: 'player-2',
        name: 'Player 2',
        score: 0,
        cards: []
    },
    {
        id: 'player-3',
        name: 'Player 3',
        score: 0,
        cards: []
    },
];
const [player1, player2, player3] = players;

const game: Game = {
    id: 'game-1',
    admin: player1,
    players,
};
export const GameBoard = () => {
    const playerAvatars = game.players.map((player) => {
        return <PlayerAvatar player={player} />
    })
    return <>
        <GameTable />
        {...playerAvatars}
    </>
}
