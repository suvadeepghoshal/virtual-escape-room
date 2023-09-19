import {Puzzle} from "@/types/Puzzle";

export interface Room {
    id: number;
    name: string;
    description: string;
    difficultyLevel: DifficultyLevel;
    maxTimeLimit: number;
    puzzles: Puzzle[];
}

enum DifficultyLevel {
    easy = 0, medium = 1, hard = 2
}