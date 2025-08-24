import {Box} from "@mui/material";
import type {PropsWithChildren} from "react";
import type {Player} from "../types/player.ts";

type Props = PropsWithChildren<{
    player?: Player,
    isAnswerer?: boolean,
    isAdmin?: boolean,
    isAsker?: boolean,
}>

export const PlayerAvatar = ({player}: Props) => {
    return <Box>{player?.name}</Box>;
}
