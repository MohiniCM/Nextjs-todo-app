let todos = [{ id: 1, title: 'Learn NExt js', completed: false }];

export default function handler(req, res) {
    const {
        query: { id },
    } = req;
    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id));

    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    if (req.method === 'PUT') {
        const { title, completed } = req.body;
        todos[todoIndex] = { ...todos[todoIndex], title, completed };
        res.status(200).json(todos[todoIndex]);
    } else if (req.method === 'DELETE') {
        const deletedTodo = todos.splice(todoIndex, 1)[0];
        res.status(200).json(deletedTodo);

    } else {
        res.setHeader('Allow', ['PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}