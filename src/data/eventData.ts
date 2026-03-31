export interface STCEvent {
  id: number;
  name: string;
  imagePath: string;
}

export const events: STCEvent[] = [
  {
    id: 1,
    name: "HackSprint 2024",
    imagePath: "/event_photo/event1.png",
  },
  {
    id: 2,
    name: "Robotics Workshop",
    imagePath: "/event_photo/event2.png",
  },
  {
    id: 3,
    name: "Guest Lecture Series",
    imagePath: "/event_photo/event3.png",
  },
];
