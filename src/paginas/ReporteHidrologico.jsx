import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ReporteHidrologico() {
  const [ultimo, setUltimo] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener último reporte
  async function fetchUltimo() {
    try {
      const resp = await fetch("/api/hidrologia");
      const data = await resp.json();
      setUltimo(data);
    } catch (err) {
      console.error("Error fetchUltimo:", err);
    }
  }

  // Obtener histórico
  async function fetchHistorico() {
    try {
      const resp = await fetch("/api/hidrologia/historico");
      const data = await resp.json();

      // Convertir strings a números (si se puede)
      const parsed = data.map((d) => ({
        timestamp: new Date(d.timestamp).toLocaleString(),
        temp_agua: parseFloat(d.temp_agua) || null,
        nivel_lago_m: parseFloat(d.nivel_lago_m) || null,
        pptacion_accum: parseFloat(d.pptacion_accum) || null,
        volumen_lago_mill_m3: parseFloat(d.volumen_lago_mill_m3) || null,
      }));

      setHistorico(parsed.reverse()); // orden ascendente
    } catch (err) {
      console.error("Error fetchHistorico:", err);
    }
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      await fetchUltimo();
      await fetchHistorico();
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3 text-center">Reporte Hidrológico en Tiempo Real</h2>

      {loading && <p>Cargando datos…</p>}

      {!loading && ultimo && (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Última medición</h5>
            <ul className="list-group">
              <li className="list-group-item">
                🌡️ Temp. agua: <b>{ultimo.temp_agua || "N/D"}</b>
              </li>
              <li className="list-group-item">
                ☔ Pptación accum: <b>{ultimo.pptacion_accum || "N/D"}</b>
              </li>
              <li className="list-group-item">
                🌊 Nivel del lago (m): <b>{ultimo.nivel_lago_m || "N/D"}</b>
              </li>
              <li className="list-group-item">
                📦 Volumen del lago (Mill. m³):{" "}
                <b>{ultimo.volumen_lago_mill_m3 || "N/D"}</b>
              </li>
              <li className="list-group-item text-muted">
                ⏱️ {new Date(ultimo.timestamp).toLocaleString()}
              </li>
            </ul>
          </div>
        </div>
      )}

      {!loading && historico.length > 0 && (
        <div>
          <h5 className="mb-3 text-center">Histórico de datos</h5>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={historico}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="temp_agua"
                stroke="#ff7300"
                name="Temp. Agua (°C)"
              />
              <Line
                type="monotone"
                dataKey="nivel_lago_m"
                stroke="#007bff"
                name="Nivel Lago (m)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
