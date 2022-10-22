export class BookModelComponent {

   public id : number;
   public name : string;
   public img : string ;
   public desc : string;

  constructor(Id: number , name: string , img: string , desc: string) {
    this.id=Id;
    this.name = name;
    this.desc = desc;
    this.img = img;
  }

}
