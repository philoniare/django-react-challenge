export class Question {
  public id: number;

  public title: string;

  public prompt: string;

  public created: Date;

  constructor(public nativeData: any) {
    this.id = nativeData.id;
    this.title = nativeData.title;
    this.prompt = nativeData.prompt;
    this.created = new Date(nativeData.created);
  }
}