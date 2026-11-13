const express = require('express');
const app = express();
app.use(express.json());

// Simulated database
const users = [{ id: 1, name: 'Alice' }];

// Endpoint 1: Get user (Secure parameterized pattern simulated)
app.get('/api/users/:id', (req, res) => {
    // In a real app, this would be: db.query('SELECT * FROM users WHERE id = $1', [req.params.id])
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

// Endpoint 2: Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', env: process.env.NODE_ENV || 'development' });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
