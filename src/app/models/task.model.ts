export interface Task {
    id: string;
    title: string;
    desc: string;
    status: 'PENDIENTE' | 'COMPLETO';
}
