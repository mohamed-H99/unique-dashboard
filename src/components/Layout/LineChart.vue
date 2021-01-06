<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {}
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style lang="scss"></style>
