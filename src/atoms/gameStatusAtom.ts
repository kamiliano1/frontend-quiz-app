import { atom } from "recoil";
import { SubjectsType } from "../../public/data/dataType";

export type GameStatusState = {
  subject: SubjectsType;
  questionNumber: number;
  isGameStarted: boolean;
  isGameFinished: boolean;
  userScore: number;
};

const defaultGameStatusState: GameStatusState = {
  subject: "Accessibility",
  questionNumber: 0,
  isGameStarted: false,
  isGameFinished: false,
  userScore: 0,
};

export const gameStatusState = atom<GameStatusState>({
  key: "gameStatusState",
  default: defaultGameStatusState,
});
