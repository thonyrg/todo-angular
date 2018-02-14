export class Todo {
    id: number;
    title: string;
    isCompleted: boolean;

    constructor(id: number, t: string, ic: boolean) {
        this.id = id;
        this.title = t || '';
        this.isCompleted = ic || false;
    }
}