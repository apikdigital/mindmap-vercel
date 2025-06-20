import React, { useState } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";

export default function App() {
  const [elements, setElements] = useState([]);

  const generateMindMap = () => {
    const centerX = 400;
    const centerY = 300;
    const spacingX = 200;
    const spacingY = 100;

    const data = {
      title: "Expert Creator",
      nodes: [
        {
          title: "Modul 1",
          children: [
            { title: "Mindset Creator" },
            { title: "Polarisasi konten" },
          ],
        },
        {
          title: "Modul 2",
          children: [
            { title: "Skill Mapping" },
            { title: "Validasi pasar" },
          ],
        },
      ],
    };

    let generated = [];
    let idCounter = 1;

    const rootId = `node-${idCounter++}`;
    generated.push({
      id: rootId,
      type: "rectangle",
      x: centerX,
      y: centerY,
      width: 150,
      height: 50,
      angle: 0,
      text: data.title,
      strokeColor: "#1e1e1e",
      backgroundColor: "#fefefe",
    });

    data.nodes.forEach((node, i) => {
      const id = `node-${idCounter++}`;
      const x = centerX - spacingX + i * spacingX * 2;
      const y = centerY + spacingY;
      generated.push({
        id,
        type: "rectangle",
        x,
        y,
        width: 150,
        height: 50,
        angle: 0,
        text: node.title,
        strokeColor: "#1e1e1e",
        backgroundColor: "#fff",
      });

      node.children.forEach((child, j) => {
        const cid = `node-${idCounter++}`;
        const cx = x + (j - 0.5) * spacingX * 0.6;
        const cy = y + spacingY;
        generated.push({
          id: cid,
          type: "rectangle",
          x: cx,
          y: cy,
          width: 150,
          height: 50,
          angle: 0,
          text: child.title,
          strokeColor: "#1e1e1e",
          backgroundColor: "#fff",
        });
      });
    });

    setElements(generated);
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <button onClick={generateMindMap} style={{ position: "absolute", zIndex: 1 }}>
        Generate Mind Map
      </button>
      <Excalidraw initialData={{ elements }} />
    </div>
  );
}