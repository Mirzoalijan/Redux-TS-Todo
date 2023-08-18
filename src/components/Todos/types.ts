export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
}

export interface ITodoProps {
    todo: ITodo;
    onDelete: (id: number) => void;
    onComplete: (id: number) => void;
    onEdit: (todo: ITodo) => void;
}
