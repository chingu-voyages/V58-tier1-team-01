const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/members", async (req, res) => {
  try {
    const {
      gender,
      countryCode,
      countryName,
      roleType,
      voyageRole,
      soloProjectTier,
      voyageTier,
      voyage,
      yearJoined,
      goal,
      source,
    } = req.query;

    const where = {};

    if (gender) where.gender = gender;
    if (countryCode) where.country_code = countryCode;
    if (countryName) where.country_name = countryName;
    if (roleType) where.role_type = roleType;
    if (voyageRole) where.voyage_role = voyageRole;
    if (soloProjectTier) where.solo_project_tier = soloProjectTier;
    if (voyageTier) where.voyage_tier = voyageTier;
    if (voyage) where.voyage = voyage;
    if (goal) where.goal = goal;
    if (source) where.source = source;

    if (yearJoined) {
      const year = Number(yearJoined);
      if (!Number.isNaN(year)) {
        const start = new Date(Date.UTC(year, 0, 1));
        const end = new Date(Date.UTC(year + 1, 0, 1));
        where.timestamp = { gte: start, lt: end };
      }
    }

    const members = await prisma.chinguMember.findMany({
      where,
      orderBy: { timestamp: "desc" }
    });

    res.json(members);
  } catch (err) {
    console.error("Error in /members:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/countries", async (req, res) => {
  try {
    const rows = await prisma.chinguMember.findMany({
      select: {
        country_code: true,
        country_name: true
      }
    });

    const map = {};
    for (const row of rows) {
      const code = row.country_code || "UNKNOWN";
      if (!map[code]) {
        map[code] = {
          country_code: row.country_code,
          country_name: row.country_name,
          count: 0
        };
      }
      map[code].count += 1;
    }

    res.json(Object.values(map));
  } catch (err) {
    console.error("Error in /countries:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
