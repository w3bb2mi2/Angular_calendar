import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class DateService{
    public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());
    public chengeMonth(dir:number){
        // console.log(this.date)
        const value = this.date.value.add(dir, "month");
        this.date.next(value);
    }
}