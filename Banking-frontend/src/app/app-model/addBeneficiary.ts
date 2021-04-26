export class AddBeneficiary{
    beneficiaryName: string;
    nickName: string;
    compoundKey: compoundKey = new compoundKey();
}
export class compoundKey{

  beneficiaryAccountNo: number;
  userAccountNo: number;
}
