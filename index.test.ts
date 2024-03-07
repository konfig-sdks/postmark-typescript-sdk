import { Postmark } from "./index";

describe("postmark-typescript-sdk", () => {
    it("initialize client", async () => {
        const postmark = new Postmark({
            apiKey: "API_KEY",
        });
    });
});
