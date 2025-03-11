export class MediumArtigoDto {
    title:string
    description:string
    link:string
    image:string
    category:any
    items:ItensDto[]

  }

  export class ItensDto{
    id:string
    capa:string
    title:string
    link:string
    author:string
    published:number
    created:number
    category:string
    content:string
  }