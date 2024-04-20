import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const GraphVenta = () => {
  const proveedor = [
    {
      cantidad_vendida: 5,
      total_bolivianos: 1000,
      nombre: "Enero",
    },
    {
      cantidad_vendida: 5,
      total_bolivianos: 2000,
      nombre: "Febrero",
    },
    {
      cantidad_vendida: 5,
      total_bolivianos: 1500,
      nombre: "Marzo",
    },
    {
      cantidad_vendida: 5,
      total_bolivianos: 1250,
      nombre: "Abril",
    },
    {
      cantidad_vendida: 5,
      total_bolivianos: 1700,
      nombre: "Mayo",
    },
  ];
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Proveedor Anual por Centro de Costo",
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          autoSkip: false, // Evita que los labels se omitan

          font: {
            size: 10, // Tamaño de la fuente
          }, // Rotación mínima en grados
        },
      },
    },
  };

  const labels = proveedor
    ?.sort((a: any, b: any) => b.cantidad_vendida - a.cantidad_vendida)
    .map((pr: any) => pr.nombre);
  const data = {
    labels,
    datasets: [
      {
        label: "Total Vendido: (Bs.)",
        data: proveedor?.map((pr: any) => pr.total_bolivianos),
        backgroundColor: "#22B99E",
        borderColor: "#22B99E",
      },
    ],
  };
  return (
    <Line
      style={{ paddingTop: 5, maxHeight: "370px", width: "100%" }}
      options={options}
      data={data}
    />
  );
};
