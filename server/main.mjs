import { app } from "./app.mjs";
import { port } from "./config.mjs";

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});
