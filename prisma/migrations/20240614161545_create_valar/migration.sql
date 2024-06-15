-- CreateTable
CREATE TABLE "valar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isAratar" BOOLEAN NOT NULL,
    "otherNames" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "domains" TEXT NOT NULL,
    "vassals" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "valar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "valar_name_key" ON "valar"("name");
