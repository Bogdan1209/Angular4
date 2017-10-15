export class User {
    constructor(
    public Id: number,
    public FirstName: string,
    public LastName: string,
    public Address: string,
    public City: string,
    public Number: Array<string>,
    ){}
}