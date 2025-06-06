import { Provider } from "./components/ui/provider";
import { Canvas } from "./components/canvas/Canvas";

function Flow() {
  return (
    <Provider>
      <Canvas />
    </Provider>
  );
}

export default Flow;
