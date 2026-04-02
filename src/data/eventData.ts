export interface STCEvent {
  id: number;
  name: string;
  imagePath: string;
}

export const events: STCEvent[] = [
  {
    id: 1,
    name: "Sparna 2024",
    imagePath: "/event_photo/sparna1.png",
  },
  {
    id: 2,
    name: "Robotics Event",
    imagePath: "/event_photo/robo1.png",
  },
  {
    id: 3,
    name: "Robotics Event",
    imagePath: "/event_photo/robo2.png",
  },
  {
    id: 4,
    name: "Guest Lecture Series",
    imagePath: "/event_photo/session1.png",
  },
  {
    id: 5,
    name: "Group Photo",
    imagePath: "/event_photo/group1.png",
  },
];
