import {Box} from "@mui/material";
import type {Question} from "../types/question.ts";

type Props = {
    question?: Question;
}

export const GameTable = ({question}: Props) => {
    return <Box>{question?.question}</Box>;
}
