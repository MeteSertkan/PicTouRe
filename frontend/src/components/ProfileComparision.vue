<template>
  <div id="radarchart">
    <div class="chart">
      <apexchart type="radar" height="365" :options="chartOptions" :series="getProfileSeries" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RadarChart",
  data() {
    return {
      /* series: [
        {
          name: "Self Assesment",
          data: [80, 50, 30, 40, 100, 20, 10]
        },
        {
          name: "Picture-Based",
          data: [20, 30, 40, 80, 20, 80, 10]
        }
      ],
 */
      chartOptions: {
        chart: {
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        stroke: {
          width: 0
        },
        fill: {
          opacity: 0.4
        },
        markers: {
          size: 1
        },
        labels: [
          "F1",
          "F2",
          "F3",
          "F4",
          "F5",
          "F6",
          "F7"
        ],
        yaxis: {
          max: 100,
          min: 0,
          labels: {
            style: {
              fontSize: "12px",
              color: "#A9A9A9"
            }
          }
        },
        dataLabels: {
          style: {
            fontSize: "16px",
            colors: ["000", "000", "000", "000", "000", "000", "000"]
          }
        },
        legend: {
          fontSize: "16px",
          position: "bottom"
        },
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: '#e8e8e8',
              fill: {
                  colors: ['#f8f8f8', '#fff']
              }
            }
          }
        }
      }
    };
  },
  computed: mapGetters(["getProfileSeries"])
};
</script>

<style scoped>
.apexcharts-legend-text {
  font-size: 20px !important;
}

apexcharts-datalabels {
  font-size: 20px !important;
}

#radarchart {
  max-width: 1024px;
}

p {
  margin-bottom: 20px;
  text-align: center;
}

</style>