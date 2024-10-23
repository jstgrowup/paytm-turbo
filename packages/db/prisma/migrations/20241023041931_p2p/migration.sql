-- CreateTable
CREATE TABLE "p2pTransfer" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "sendersUserId" TEXT NOT NULL,
    "recieversUserId" TEXT NOT NULL,

    CONSTRAINT "p2pTransfer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "p2pTransfer" ADD CONSTRAINT "p2pTransfer_sendersUserId_fkey" FOREIGN KEY ("sendersUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p2pTransfer" ADD CONSTRAINT "p2pTransfer_recieversUserId_fkey" FOREIGN KEY ("recieversUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
