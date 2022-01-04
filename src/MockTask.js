import { v4 as uuidv4 } from "uuid";

export const MockTask = [
    {
      id: uuidv4(),
      work: "Brush Teeth",
      deadline: "2021-12-18",
      isCompleted: true,
    },
    {
      id: uuidv4(),
      work: "Learn Japaneses",
      deadline: "2021-12-17",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      work: "Practice React",
      deadline: "2021-12-21",
      isCompleted: false,
    },
  ]