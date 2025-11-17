-- CreateTable
CREATE TABLE "ChinguMember" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3),
    "gender" TEXT,
    "country_code" TEXT,
    "country_name" TEXT,
    "timezone" TEXT,
    "goal" TEXT,
    "goal_other" TEXT,
    "source" TEXT,
    "source_other" TEXT,
    "solo_project_tier" TEXT,
    "role_type" TEXT,
    "voyage_role" TEXT,
    "voyage" TEXT,
    "voyage_tier" TEXT,

    CONSTRAINT "ChinguMember_pkey" PRIMARY KEY ("id")
);
