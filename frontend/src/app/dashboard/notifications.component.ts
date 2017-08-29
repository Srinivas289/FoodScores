import {Component} from '@angular/core'
import {Notification} from '../Interfaces/notification'
import {Score} from '../Interfaces/Score'
@Component({
    selector:'dash-notifications',
    templateUrl:'notifications.component.html'
})
export class NotificationsComponent
{
    notifications: Notification[] = [
        {
            faclass:'fa-comment',
            time:'4 minutes ago',
            notification_type:'New Comment'
        },
        {
            faclass:'fa-twitter',
            time:'12 minutes ago',
            notification_type:'3 New Followers'
        },
        {
            faclass:'fa-envelope',
            time:'127 minutes ago',
            notification_type:'Message Sent'
        },
        {
            faclass:'fa-tasks',
            time:'43 minutes ago',
            notification_type:'New Task'
        },
        {
            faclass:'fa-upload',
            time:'11:32 AM',
            notification_type:'Server Rebooted'
        },
        {
            faclass:'fa-bolt',
            time:'11:13 AM',
            notification_type:'Server Crashed!'
        },
        {
            faclass:'fa-warning',
            time:'10:57 AM',
            notification_type:'Server Not Responding'
        },
        {
            faclass:'fa-shopping-cart',
            time:'9:49 AM',
            notification_type:'New Order Placed'
        },
    ];
    scores: any[] = [
        {
            name:'Sodexo at Lexis Nexis',
            ins_Score:'100',
            address:'1000 ALDERMAN DR'
        },{
            name:'Star Pizza',
            ins_Score:'100',
            address:'1000 MARIETTA HWY STE 600'
        } ,{
            name:'The Golf Club Georgia Locker',
            ins_Score:'97',
            address:'1 GOLF CLUB DR'
        },{
            name:'Eurest Dining Service',
            ins_Score:'91',
            address:'1 LITHONIA WAY'
        },{
            name:'Starbucks Coffee #8280',
            ins_Score:'88',
            address:'11000 NORTH POINT CIR'
        },{
            name:'Taqueria San Pancho',
            ins_Score:'84',
            address:'10479 ALPHARETTA ST'
        }]
}