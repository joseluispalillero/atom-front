import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
    name: 'filterStatus',
})
export class FilterStatusPipe implements PipeTransform {
    transform(tasks: Task[], status: 'PENDIENTE' | 'COMPLETO'): Task[] {
        return tasks.filter(task => task.status === status);
    }
}
