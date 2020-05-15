Using Shell:

curl -fsSL https://deno.land/x/install/install.sh | sh

Using Homebrew:

brew install deno



Getting Started
Try running a simple program:

deno run https://deno.land/std/examples/welcome.ts
Or a more complex one:

import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}