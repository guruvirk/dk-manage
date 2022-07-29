export class Order {
    id: string
    code: string
    email: string
    phone: string
    name: string
    createdOn: Date
    service: string
    address: string
    region: string
    message: string
    status: string
    lastUpdate: Date

    constructor(obj?: any) {
        if (!obj) {
            return;
        }
        this.id = obj.id
        this.code = obj.code
        this.name = obj.name
        this.createdOn = obj.createdOn
        this.status = obj.status
        this.lastUpdate = obj.lastUpdate
        this.email = obj.email
        this.phone = obj.phone
        this.service = obj.service
        this.address = obj.address
        this.region = obj.region
        this.message = obj.message
    }
}