import { SubjectsType } from "@/data/dataType";
import { atom } from "recoil";

export type GameStatusState = {
  subject: SubjectsType;
  questionNumber: number;
  isGameStarted: boolean;
  isGameFinished: boolean;
  userScore: number;
};

const defaultGameStatusState: GameStatusState = {
  subject: "",
  questionNumber: 0,
  isGameStarted: false,
  isGameFinished: false,
  userScore: 0,
};

export const gameStatusState = atom<GameStatusState>({
  key: "gameStatusState",
  default: defaultGameStatusState,
});
