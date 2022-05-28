import {LoginModel} from "./xotomicro-front-auth-service/LoginModel"
import {EventModel} from "./xotomicro-front-event-service/EventModel"
import {NavModel} from "./xotomicro-front-hook-system/NavModel"
import {OrderModel} from "./xotomicro-front-order-service/OrderModel"
import {ProductModel} from "./xotomicro-front-product-service/ProductModel"
import {UserModel} from "./xotomicro-front-user-service/UserModel"

export {LoginModel, EventModel, NavModel, OrderModel, ProductModel, UserModel}

export interface GlobalStoreModel {
    globalStore: EventModel & LoginModel & NavModel & OrderModel & ProductModel & UserModel
    handlerList: any
    on(event: string, callback: Function, runBackupEvents?: boolean): number
    off(id: number): void
    emit(event: string, payload: any): void
}
