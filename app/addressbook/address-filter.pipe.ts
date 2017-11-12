import {PipeTransform,Pipe} from 'angular2/core';
import {IPerson} from './person';

@Pipe({
    name:'addressFilter'
})
export class AddressFilterPipe implements PipeTransform
{
   transform(value:IPerson[],args:string[]) :IPerson[]{
    let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    return filter ? value.filter((person: IPerson) =>
        person.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
   }
}