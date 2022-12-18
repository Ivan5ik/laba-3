import { HomePage } from "../Pages/HomePage";
import { PalletPage } from "../Pages/PalletePage";

export const routes = [
  { path: "/palette/:id", component: <PalletPage /> },
  { path: "/", component: <HomePage /> },
];
