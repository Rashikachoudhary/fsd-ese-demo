const express = require("express");
const Candidate = require("./Candidate");
const aiShortlist = require("./ai");

const router = express.Router();

router.post("/candidates", async (req, res) => {
  const candidate = await Candidate.create(req.body);
  res.json(candidate);
});

router.get("/candidates", async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
});

router.post("/match", async (req, res) => {
  const { requiredSkills, minExperience } = req.body;

  const candidates = await Candidate.find();

  const matched = candidates.map((candidate) => {
    const matchedSkills = candidate.skills.filter((skill) =>
      requiredSkills.includes(skill)
    );

    const score =
      matchedSkills.length / requiredSkills.length;

    return {
      ...candidate._doc,
      matchedSkills,
      matchScore: score * 100,
    };
  });

  matched.sort((a, b) => b.matchScore - a.matchScore);

  res.json(matched);
});

router.post("/ai/shortlist", async (req, res) => {
  const candidates = await Candidate.find();

  const prompt = `
  Job Requirements:
  ${JSON.stringify(req.body)}

  Candidates:
  ${JSON.stringify(candidates)}

  Rank candidates and explain why.
  `;

  const result = await aiShortlist(prompt);

  res.json({ result });
});

module.exports = router;