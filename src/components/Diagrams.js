import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

function Diagrams(props) {
  const labels = [
    "Belgien 1. Liga",
    "1. Bundesliga",
    "2. Bundesliga",
    "Premier League",
    "England 2. Liga",
    "England 3. Liga",
    "Frankreich Lige 1",
    "Frankreich Lige 2",
    "Griechenland 1. Liga",
    "Serie A",
    "Serie B",
    "Eredivisie",
    "Portugal 1. Liga",
    "Schottland 1. Liga",
    "Spanien La Liga",
    "Spanien 2. Liga",
    "Türkei 1. Liga",
  ];

  const data_ligen = {
    "Belgien 1. Liga": {
      Div: "B1",
      H: "0.8605947955390335",
      D: "0.9535315985130112",
      A: "0.9460966542750929",
      O2point5: "0.8197026022304833",
      U2point5: "0.9460966542750929",
      AHH: "0.8531598513011153",
      AHA: "0.7806691449814126",
      CH: "0.9033457249070632",
      "CD": "0.9349442379182156",
      CA: "0.9349442379182156",
    },
    "1. Bundesliga": {
      Div: "D1",
      H: "0.8660130718954249",
      D: "0.8643790849673203",
      A: "0.9362745098039216",
      O2point5: "0.8741830065359477",
      U2point5: "0.9493464052287581",
      AHH: "0.8937908496732027",
      AHA: "0.8513071895424836",
      CH: "0.8333333333333334",
      "CD": "0.8447712418300654",
      CA: "0.8676470588235294",
    },
    "2. Bundesliga": {
      Div: "D2",
      H: "0.9444444444444444",
      D: "0.9052287581699346",
      A: "0.9803921568627451",
      O2point5: "0.8594771241830066",
      U2point5: "0.9722222222222222",
      AHH: "0.880718954248366",
      AHA: "0.8513071895424836",
      CH: "0.9313725490196079",
      "CD": "0.9411764705882353",
      CA: "0.9607843137254902",
    },
    "Premier League": {
      Div: "E0",
      H: "0.8289473684210527",
      D: "0.9210526315789473",
      A: "0.9197368421052632",
      O2point5: "0.8960526315789473",
      U2point5: "0.9421052631578948",
      AHH: "0.8973684210526316",
      AHA: "0.8144736842105263",
      CH: "0.7486842105263158",
      "CD": "0.8486842105263158",
      CA: "0.8368421052631579",
    },
    "England 2. Liga": {
      Div: "E1",
      H: "0.9302536231884058",
      D: "0.9166666666666666",
      A: "0.9692028985507246",
      O2point5: "0.9375",
      U2point5: "0.8813405797101449",
      AHH: "0.9356884057971014",
      AHA: "0.8922101449275363",
      CH: "0.8740942028985508",
      "CD": "0.9085144927536232",
      CA: "0.917572463768116",
    },
    "England 3. Liga": {
      Div: "E2",
      H: "0.8865546218487395",
      D: "0.9495798319327731",
      A: "0.9485294117647058",
      O2point5: "0.8046218487394958",
      U2point5: "0.8466386554621849",
      AHH: "0.8235294117647058",
      AHA: "0.7762605042016807",
      CH: "0.9044117647058824",
      "CD": "0.944327731092437",
      CA: "0.9422268907563025",
    },
    "Frankreich Lige 1": {
      Div: "F1",
      H: "0.8512898330804249",
      D: "0.9241274658573596",
      A: "0.9393019726858877",
      O2point5: "0.9150227617602428",
      U2point5: "0.9180576631259484",
      AHH: "0.921092564491654",
      AHA: "0.9104704097116844",
      CH: "0.874051593323217",
      "CD": "0.8952959028831563",
      CA: "0.9317147192716236",
    },
    "Frankreich Lige 2": {
      Div: "F2",
      H: "0.9242424242424242",
      D: "0.8560606060606061",
      A: "0.9833333333333333",
      O2point5: "0.9136363636363637",
      U2point5: "0.8242424242424242",
      AHH: "0.7863636363636364",
      AHA: "0.7833333333333333",
      CH: "0.9424242424242424",
      "CD": "0.8984848484848484",
      CA: "0.9727272727272728",
    },
    "Griechenland 1. Liga": {
      Div: "G1",
      H: "0.6083333333333333",
      D: "0.7291666666666666",
      A: "0.83125",
      O2point5: "0.6375",
      U2point5: "0.5270833333333333",
      AHH: "0.5520833333333334",
      AHA: "0.50625",
      CH: "0.7458333333333333",
      "CD": "0.7541666666666667",
      CA: "0.85",
    },
    "Serie A": {
      Div: "I1",
      H: "0.8671052631578947",
      D: "0.9394736842105263",
      A: "0.9197368421052632",
      O2point5: "0.8789473684210526",
      U2point5: "0.9552631578947368",
      AHH: "0.8973684210526316",
      AHA: "0.8236842105263158",
      CH: "0.8552631578947368",
      "CD": "0.8526315789473684",
      CA: "0.8736842105263158",
    },
    "Serie B": {
      Div: "I2",
      H: "0.9513157894736842",
      D: "0.8513157894736842",
      A: "0.9776315789473684",
      O2point5: "0.9539473684210527",
      U2point5: "0.9513157894736842",
      AHH: "0.9223684210526316",
      AHA: "0.8894736842105263",
      CH: "0.9407894736842105",
      "CD": "0.9184210526315789",
      CA: "0.9723684210526315",
    },
    Eredivisie: {
      Div: "N1",
      H: "0.895910780669145",
      D: "0.9442379182156134",
      A: "0.9405204460966543",
      O2point5: "0.8029739776951673",
      U2point5: "0.9591078066914498",
      AHH: "0.8587360594795539",
      AHA: "0.8401486988847584",
      CH: "0.8438661710037175",
      "CD": "0.9330855018587361",
      CA: "0.912639405204461",
    },
    "Portugal 1. Liga": {
      Div: "P1",
      H: "0.8709150326797386",
      D: "0.9395424836601307",
      A: "0.9591503267973857",
      O2point5: "0.8986928104575164",
      U2point5: "0.8937908496732027",
      AHH: "0.8888888888888888",
      AHA: "0.8545751633986928",
      CH: "0.8594771241830066",
      "CD": "0.9150326797385621",
      CA: "0.9330065359477124",
    },
    "Schottland 1. Liga": {
      Div: "SC0",
      H: "0.8461538461538461",
      D: "0.9487179487179487",
      A: "0.9273504273504274",
      O2point5: "0.8589743589743589",
      U2point5: "0.905982905982906",
      AHH: "0.8931623931623932",
      AHA: "0.8418803418803419",
      CH: "0.9017094017094017",
      "CD": "0.9829059829059829",
      CA: "0.9743589743589743",
    },
    "Spanien La Liga": {
      Div: "SP1",
      H: "0.8039473684210526",
      D: "0.9039473684210526",
      A: "0.9342105263157895",
      O2point5: "0.9381578947368421",
      U2point5: "0.9171052631578948",
      AHH: "0.906578947368421",
      AHA: "0.8486842105263158",
      CH: "0.7802631578947369",
      "CD": "0.8263157894736842",
      CA: "0.9026315789473685",
    },
    "Spanien 2. Liga": {
      Div: "SP2",
      H: "0.9372294372294372",
      D: "0.8928571428571429",
      A: "0.9891774891774892",
      O2point5: "0.9588744588744589",
      U2point5v: "0.8365800865800865",
      AHH: "0.7976190476190477",
      AHA: "0.7911255411255411",
      CH: "0.9632034632034632",
      CD: "0.8809523809523809",
      CA: "0.987012987012987",
    },
    "Türkei 1. Liga": {
      Div: "T1",
      H: "0.9090909090909091",
      D: "0.9173553719008265",
      A: "0.9696969696969697",
      O2point5: "0.7947658402203857",
      U2point5: "0.9035812672176309",
      AHH: "0.8305785123966942",
      AHA: "0.8223140495867769",
      CH: "0.9159779614325069",
      CD: "0.9366391184573003",
      CA: "0.9586776859504132",
    },
  };

  let selected_data = [];

  let selectedMarket = props.market;

  const filterHandler = () => {
    labels.forEach((liga) => {
      if (selectedMarket  == "Heim gewinnt") {
        selected_data.push(Math.round(data_ligen[liga].H * 100));
      } else if (selectedMarket  === "Auswärts gewinnt") {
        selected_data.push(Math.round(data_ligen[liga].A * 100));
      } else if (selectedMarket  === "Unentschieden") {
        selected_data.push(Math.round(data_ligen[liga].D * 100));
      } else if (selectedMarket  === "Über 2.5 Tore") {
        selected_data.push(Math.round(data_ligen[liga].O2point5 * 100));
      } else if (selectedMarket  === "Unter 2.5 Tore") {
        selected_data.push(Math.round(data_ligen[liga].U2point5 * 100));
      } else if (selectedMarket  === "AHH") {
        selected_data.push(Math.round(data_ligen[liga].AHH * 100));
      } else if (selectedMarket  === "AHA") {
        selected_data.push(Math.round(data_ligen[liga].AHA * 100));
      } else if (selectedMarket  === "CH") {
        selected_data.push(Math.round(data_ligen[liga].CH * 100));
      } else if (selectedMarket  === "CD") {
        selected_data.push(Math.round(data_ligen[liga].CD * 100));
      } else if (selectedMarket  === "CA") {
        selected_data.push(Math.round(data_ligen[liga].CA * 100));
      }
      
    });
  };

  filterHandler();

  const data = {
    labels: labels,
    datasets: [
      {
        label: props.market,
        data: selected_data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    maintainAspectRatio: false,
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      datalabels: {
        color: 'black',
        anchor: "center",
        clamp: true
      },
      title: {
        display: false,
        text: "Anteil der Spiele, bei denen Pinnacle Quoten über dem Marktdurchschnitt anbietet",
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} style={{ maxHeight: "65vh" }} />
    </>
  );
}

export default Diagrams;
