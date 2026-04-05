const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

// Running Check
app.get("/", (req, res) => {
  res.send("AI Dev Workflow Demo running...");
});

// AI Code Generation (test)
app.post("/ai-generate", (req, res) => {
  const { prompt } = req.body;

  res.json({
    message: "Code generated successfully",
    prompt,
    code: `function example() { return "Generated from prompt: ${prompt}" }`
  });
});

// AI Code Review (test)
app.post("/ai-review", (req, res) => {
  const { code } = req.body;

  res.json({
    message: "Code review completed",
    suggestions: [
      "Use const instead of var",
      "Add error handling",
      "Improve function naming"
    ]
  });
});

// AI Test Generation (test)
app.post("/ai-test", (req, res) => {
  res.json({
    message: "Test generated",
    test: "describe('example', () => { it('should return value', () => { expect(true).toBe(true); }); });"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});