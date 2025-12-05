import app from "./app";
import { AppDataSource } from "./config/database";

const PORT = process.env.PORT || 5500;

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("✔ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
