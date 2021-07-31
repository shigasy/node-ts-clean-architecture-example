import { UserController } from "../interface_adapter/controller";
import express from "express";
export const router = express.Router();

const userController = new UserController();

router.get("/users", async (req: express.Request, res: express.Response) => {
  res.send("aa");
});

router.get(
  "/users/:id",
  async (req: express.Request, res: express.Response) => {
    const result = await userController.findUser(req);
    res.send(result);
  }
);