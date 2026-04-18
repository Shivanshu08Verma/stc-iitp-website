export interface LeaderboardEntry {
  position: number;
  team: string;
  score: number;
}

export type LeaderboardDataType = Record<string, LeaderboardEntry[]>;

export const leaderboardData: LeaderboardDataType = {
  "2025": [
    { position: 1, team: "Draco", score: 2840 },
    { position: 2, team: "Pegasus", score: 2748 },
    { position: 3, team: "Cassiopeia", score: 1803 },
  ],
  "2024": [
    { position: 1, team: "Draco", score: 1519 },
    { position: 2, team: "Pegasus", score: 1398 },
    { position: 3, team: "Cassiopeia", score: 1036 },
  ],
};
