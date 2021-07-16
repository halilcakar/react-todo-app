export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
  isEditing?: boolean;
};

export type Todos = Todo[];
