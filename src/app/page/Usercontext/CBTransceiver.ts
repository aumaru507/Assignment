export class CBTransceiver {
  public name: string = "";
  public lastname:string = "";
  public telephoneNumber: string = "";
  public email: string = "";
  public password: string = "";

  JSONToCB(jsonData :any){
    this.name = jsonData.name
    this.lastname = jsonData.lastname
    this.telephoneNumber = jsonData.telephoneNumber
    this.email = jsonData.email
    this.password = jsonData.password
  }

  CBTOJSON(CBTransceiver : any){
    const result: CBTransceiver = {} as CBTransceiver;
    result.name = CBTransceiver.name
    result.lastname = CBTransceiver.lastname
    result.telephoneNumber = CBTransceiver.telephoneNumber
    result.email = CBTransceiver.email
    result.password = CBTransceiver.password
    return result;
  }
}
