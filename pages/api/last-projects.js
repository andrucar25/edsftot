export default function handler(req, res){
    res.status(200).json(
      [
        {
            "id":1,
            "title":"Titulo proyecto",
            "description":"Descripción proyecto1",
            "image":"/images/project-1.jpg"
        },
        {
            "id":2,
            "title":"Titulo proyecto",
            "description":"Descripción proyecto2",
            "image":"/images/project-2.jpg"
        },
        {
            "id":3,
            "title":"Titulo proyecto",
            "description":"Descripción proyecto3",
            "image":"/images/project-3.jpg"
        },
        {
            "id":4,
            "title":"Titulo proyecto",
            "description":"Descripción proyecto4",
            "image":"/images/project-4.jpg"
        }
    ]
    )
}