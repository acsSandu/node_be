import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Route that returns the current date
app.get("/api/date", (req: Request, res: Response) => {
    const currentDate = new Date();
    res.json({ date: currentDate.toISOString() });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
