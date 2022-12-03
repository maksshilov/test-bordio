export const STATUSES = ["New task", "Scheduled", "In progress", "Completed"];

export const DragItemTypes = {
  CARD: "card",
};

type TStatus = "New task" | "Scheduled" | "In progress" | "Completed" | string;

export interface ICard {
  uuid: number;
  description: string;
  duration: string;
  color: string;
  status: TStatus;
}
