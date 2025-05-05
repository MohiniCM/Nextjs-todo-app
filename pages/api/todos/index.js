let todos = [
    {id:1,title:'Learn nextJS', completed:false}
]

export default function handler(req,res) {
    if(req.method === 'GET'){
        res.status(200).json(todods)
    }else if(req.method === 'POST') {
        const {title} = req.body;
        const newTodo = {
            id:Date.now(),
            title,
            completed:false
        }
        todos.push(newTodo)
        res.status(201).json(newTodo)
    }else {
        res.setHeader('Allow',['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not allowed`)
    }
    }
