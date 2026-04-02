export interface TeamData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
}

export const teams: TeamData[] = [
  {
    id: "draco",
    name: "House Draco",
    tagline: "Fierce & Unyielding",
    description:
      "Fueled by ambition and a burning passion for technology, House Draco dominates the competition. They tackle the toughest high-prep challenges with relentless determination.",
    icon: "🐉", // Or an image path like "/draco-logo.png"
  },
  {
    id: "pegasus",
    name: "House Pegasus",
    tagline: "Swift & Innovative",
    description:
      "Soaring above the rest, House Pegasus thrives on quick thinking and out-of-the-box solutions. They excel in fast-paced, low-prep environments.",
    icon: "🐎",
  },
  {
    id: "cassiopeia",
    name: "House Cassiopeia",
    tagline: "Strategic & Brilliant",
    description:
      "Guided by intellect and precision, House Cassiopeia represents the pinnacle of strategic problem-solving. Their meticulous approach ensures every submission is a masterpiece.",
    icon: "👑",
  },
];
