const fs = require("fs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // 1. Read JSON file as text
  const raw = fs.readFileSync("./data/chingu_info.json", "utf8");

  // 2. Parse JSON into JS array
  const json = JSON.parse(raw);

  // 3. Loop through each object and insert into DB
  for (const row of json) {
    await prisma.chinguMember.create({
      data: {
        timestamp: row["Timestamp"] ? new Date(row["Timestamp"]) : null,
        gender: row["Gender"] || null,
        country_code: row["Country Code"] || null,
        country_name: row["Country name (from Country)"] || null,
        timezone: row["Timezone"] || null,
        goal: row["Goal"] || null,
        goal_other: row["Goal-Other"] || null,
        source: row["Source"] || null,
        source_other: row["Source-Other"] || null,
        solo_project_tier: row["Solo Project Tier"] || null,
        role_type: row["Role Type"] || null,
        voyage_role: row["Voyage Role"] || null,
        voyage: row["Voyage (from Voyage Signups)"] || null,
        voyage_tier: row["Voyage Tier"] || null,
      },
    });
  }

  console.log("JSON imported successfully!");
}

main()
  .catch((err) => {
    console.error("Error while importing JSON:", err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
