const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Permite que el frontend en Vercel consulte esta API desde otro dominio.
app.use(cors());

app.get("/test", (_req, res) => {
  res.status(200).json({
    success: true,
    status: 200,
    message: "API funcionando correctamente",
    data: {
      estudiante: "Aldo Alexander Pablo Tziná",
      carne: "20623",
      curso: "Despliegue web",
      campus: "UVG Campus Altiplano",
      tecnologia: "Node.js + Express",
      plataforma: "Render",
    },
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`API disponible en el puerto ${PORT}. Ruta de prueba: /test`);
});
