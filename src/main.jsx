import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import App from "./App"
{/* ^ import ^ */}
const rootItem = document.getElementById("root");
const root = ReactDOM.createRoot(rootItem);
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)
