export class FaceSnap {
  title: string;
  description: string;
  createdDate: Date;
  snaps: number;
  imgUrl: string;
  altImg: string;

  constructor(
    title: string, 
    description: string, 
    createdDate: Date, 
    snaps: number, 
    imgUrl: string, 
    altImg: string,) {
        this.title = title;
        this.description = description;
        this.createdDate = createdDate;
        this.snaps = snaps;
        this.imgUrl = imgUrl;
        this.altImg = altImg;
    }
}

//  Raccourci TypeScript. 
//Si les propriétés sont initialisées par args du constructor
//On peut etirer les déclarations et initialisations
// Par contre il faut ajouter public dans le constructor
/*
export class FaceSnap {
    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdDate: Date,
                public snaps: number) {
    }
}
*/