import { MezzuriteUtils } from "@ms/mezzurite-core";
import {environment} from "./environment";

export class MezzuriteAngularUtils extends MezzuriteUtils{
    static createMezzuriteObject(obj: any){
        super.createMezzuriteObject(obj);
        (<any>window).mezzurite.packageVersion = environment.version;
        (<any>window).mezzurite.packageName = environment.name;
    }

    static getName(name: string, key: string, clarifier: string = null): string{
       return super.getName(name, key, clarifier);
    }

    static makeId(): string{
        return super.makeId();
    }
}