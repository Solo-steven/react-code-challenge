import { createRoot } from "react-dom/client";
import App from "./App";
const rootNode = document.getElementById("root");
const container = createRoot(rootNode!);

container.render(<App/>);
