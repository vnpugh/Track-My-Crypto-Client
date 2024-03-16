import { User } from "./user";

export class Watchlist {
    id!: number;
    watchlist_name: string = '';
    watchlist_description: string = '';
    user_id?: number;
    user?: User;


}
