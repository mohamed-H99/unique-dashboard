<template>
  <section id="blog-dashboard">
    <div class="section-heading container-fluid">
      <p>Dashboard</p>
      <h2>Personal Blog</h2>
    </div>
    <div class="container-fluid">
      <!-- cards -->
      <div class="row">
        <div class="col-lg col-md-6" v-for="data in cardsData" :key="data.name">
          <div
            class="card"
            :class="[data.direction == 'up' ? 'g-green' : 'g-red']"
          >
            <div class="card-body px-0 text-center">
              <h6 class="text-muted">{{ data.name | uppercase }}</h6>
              <h2>{{ data.value }}</h2>
              <!-- chart -->
              <div class="card-footer p-0">
                <span
                  class="percentage"
                  :class="[data.direction == 'up' ? 'green' : 'red']"
                >
                  <v-icon :name="'sort-' + data.direction" />
                  {{ data.percentage }}
                </span>
                <trend
                  :data="data.points"
                  :gradient="[data.direction == 'up' ? '#28a745' : '#dc3545']"
                  auto-draw
                  smooth
                >
                </trend>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- charts -->
      <div class="row">
        <div class="col-lg-8">
          <!-- line chart -->
          <div class="card">
            <div class="card-header">
              <h5>Users Overview</h5>
            </div>
            <div class="card-body">
              <ul>
                <li>
                  <label for="example-datepicker">Start from</label>
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="pickedDate.startDate"
                    :date-format-options="{
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }"
                  ></b-form-datepicker>
                </li>
                <li>
                  <label for="example-datepicker-2">End To</label>
                  <b-form-datepicker
                    id="example-datepicker-2"
                    v-model="pickedDate.endDate"
                    :date-format-options="{
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }"
                  ></b-form-datepicker>
                </li>
              </ul>
              <a href="#">
                View full report <v-icon name="long-arrow-alt-right" />
              </a>
            </div>
            <div class="card-footer">
              <line-chart :chartData="lineData" :options="lineOptions" />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <!-- pie chart -->
          <div class="card">
            <div class="card-header">
              <h5>Users by Device</h5>
            </div>
            <div class="card-body">
              <pie-chart :chartData="pieData" :options="pieOptions" />
            </div>
            <div class="card-footer">
              <ul>
                <li>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                    size="sm"
                    class="mt-3"
                  ></b-form-select>
                </li>
                <li>
                  <a href="#"
                    >View full report <v-icon name="long-arrow-alt-right"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- row 3 -->
      <div class="row">
        <!-- draft -->
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <h5>New Draft</h5>
            </div>
            <div class="card-body">
              <b-form>
                <b-form-input
                  v-model="draft.title"
                  placeholder="Draft title"
                  class="mb-3"
                ></b-form-input>
                <b-form-textarea
                  id="textarea"
                  v-model="draft.text"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  rows="12"
                ></b-form-textarea>
                <b-button variant="primary" class="mt-3">Create Draft</b-button>
              </b-form>
            </div>
          </div>
        </div>
        <!-- discussions -->
        <div class="col-lg-5">
          <div class="card">
            <div class="card-header">
              <h5>Discussions</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <img src="http://placeskull.com/32/32" alt="user" />
                <div class="content">
                  <h6>
                    <a href="#">John Doe</a> on <a href="#">Hello World</a> -
                    <span>3 days ago</span>
                  </h6>
                  <p>
                    Well, the way they make shows is, they make one show ...
                  </p>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      <v-icon scale="0.7" name="check" class="green" /> Approve
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <v-icon scale="0.7" name="times" class="red" /> Reject
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <v-icon scale="0.7" name="ellipsis-v" /> Edit
                    </button>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <img src="http://placeskull.com/32/32" alt="user" />
                <div class="content">
                  <h6>
                    <a href="#">John Doe</a> on <a href="#">Hello World</a> -
                    <span>3 days ago</span>
                  </h6>
                  <p>
                    Well, the way they make shows is, they make one show ...
                  </p>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      <v-icon scale="0.7" name="check" class="green" /> Approve
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <v-icon scale="0.7" name="times" class="red" /> Reject
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <v-icon scale="0.7" name="ellipsis-v" /> Edit
                    </button>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <img src="http://placeskull.com/32/32" alt="user" />
                <div class="content">
                  <h6>
                    <a href="#">John Doe</a> on <a href="#">Hello World</a> -
                    <span>3 days ago</span>
                  </h6>
                  <p>
                    Well, the way they make shows is, they make one show ...
                  </p>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" class="btn btn-outline-secondary">
                      <v-icon scale="0.7" name="check" class="green" /> Approve
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <v-icon scale="0.7" name="times" class="red" /> Reject
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                      <v-icon scale="0.7" name="ellipsis-v" /> Edit
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div class="card-footer">
              <button class="btn btn-outline-secondary mx-auto d-block">
                View all Comments
              </button>
            </div>
          </div>
        </div>
        <!-- referrals -->
        <div class="col-lg-3">
          <div class="card">
            <div class="card-header">
              <h5>Top Referrals</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span>Github</span>
                <span>18,356</span>
              </li>
              <li class="list-group-item">
                <span>Stack Overflow</span>
                <span>10,016</span>
              </li>
              <li class="list-group-item">
                <span>Hacker News</span>
                <span>9,983</span>
              </li>
              <li class="list-group-item">
                <span>Reddit</span>
                <span>8,356</span>
              </li>
              <li class="list-group-item">
                <span>The Next Web</span>
                <span>6,789</span>
              </li>
              <li class="list-group-item">
                <span>Tech Crunch</span>
                <span>4,096</span>
              </li>
              <li class="list-group-item">
                <span>YouTube</span>
                <span>2,011</span>
              </li>
              <li class="list-group-item">
                <span>Adobe</span>
                <span>847</span>
              </li>
            </ul>
            <div class="card-footer">
              <ul>
                <li>
                  <b-form-select
                    v-model="selected"
                    :options="options"
                    size="sm"
                    class="mt-3"
                  ></b-form-select>
                </li>
                <li>
                  <a href="#"
                    >View full report <v-icon name="long-arrow-alt-right"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LineChart from "../components/Layout/LineChart";
import PieChart from "../components/Layout/PieChart";
export default {
  name: "BlogDashboard",
  components: {
    LineChart,
    PieChart,
  },
  filters: {
    uppercase: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    },
  },
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      cardsData: [
        {
          name: "posts",
          value: "2,901",
          percentage: "4.9%",
          direction: "up",
          points: [3, 5, 2, 7, 9],
        },
        {
          name: "pages",
          value: "98",
          percentage: "13.7",
          direction: "up",
          points: [2, 1, 5, 4, 7, 8],
        },
        {
          name: "comments",
          value: "5,194",
          percentage: "2.01%",
          direction: "down",
          points: [3, 5, 8, 5, 1],
        },
        {
          name: "new customers",
          value: "11",
          percentage: "2.95%",
          direction: "down",
          points: [7, 3, 5, 1, 2],
        },
        {
          name: "subscribers",
          value: "20,500",
          percentage: "1.02%",
          direction: "up",
          points: [1, 3, 2, 7, 9],
        },
      ],
      selected: null,
      options: [
        { value: null, text: "..." },
        { value: "a", text: "Last Week" },
        { value: "b", text: "Today" },
        { value: { C: "3PO" }, text: "Last Month" },
        { value: "d", text: "Last Year", disabled: true },
      ],
      pickedDate: {},
      lineData: {
        datasets: [
          {
            data: [50, 100, 70, 30, 40, 110, 60, 70, 120, 130],
            backgroundColor: "transparent",
            borderColor: "#007bffb0",
            label: "Current Month",
          },
          {
            data: [15, 10, 15, 20, 10, 25, 15, 20, 60, 10],
            backgroundColor: "transparent",
            borderColor: "#dc3545a1",
            label: "Last Month",
          },
        ],
        labels: ["1", "7", "14", "21", "28", "5", "12", "19", "26", "2"],
      },
      lineOptions: {},
      pieData: {
        datasets: [
          {
            data: [60, 10, 30],
            backgroundColor: ["#007bff", "#007bff6b", "#007bffb0"],
          },
        ],
        labels: ["Desktop", "Tablet", "Mobile"],
      },
      pieOptions: {},
      draft: {},
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
#blog-dashboard {
  padding: var(--page-pad);
  .red {
    color: var(--red);
  }
  .green {
    color: var(--green);
  }
  .container-fluid > .row {
    // row1
    &:first-child {
      .card {
        .card-footer {
          border-top: 0;
          .percentage {
            display: inline-block;
            transform: translateY(20px);
          }
        }
      }
    }
    // row2
    &:nth-child(2) {
      > * {
        &:first-child {
          .card {
            overflow: auto;
            .card-body {
              background-color: var(--light);
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              gap: 0.5rem;
              ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 0.5rem;
              }
              a {
                color: var(--dark-color);
                font-weight: 400;
                font-size: 0.8rem;
              }
            }
          }
        }
        &:last-child {
          .card .card-footer {
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              li {
                a {
                  color: var(--dark-color);
                  font-weight: 400;
                  font-size: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
    // row3
    &:nth-child(3) {
      > * {
        // descussions
        &:nth-child(2) {
          .card {
            .list-group {
              > * {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 1rem;
                img {
                  border-radius: 0.25rem;
                }
                .content {
                  color: var(--gray);
                  h6 {
                    a {
                      color: var(--dark-color);
                    }
                  }
                  button {
                    border-color: var(--grey-color);
                    transition: var(--transit);
                    padding: 0.1rem 0.4rem;
                    font-size: 0.9rem;
                    &:hover {
                      background-color: transparent;
                      color: var(--dark-color);
                      border-color: var(--gray);
                    }
                  }
                }
              }
            }
            .card-footer {
              border-top: 1px solid rgba(0, 0, 0, 0.125);
              button {
                border-color: var(--grey-color);
                transition: var(--transit);
                font-weight: 400;
                &:hover {
                  background-color: transparent;
                  color: var(--dark-color);
                  border-color: var(--gray);
                }
              }
            }
          }
        }
        &:nth-child(3) {
          .card .list-group {
            > * {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 0.9rem;
            }
          }
          .card .card-footer {
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              gap: 0.5rem;
              li {
                a {
                  color: var(--dark-color);
                  font-weight: 400;
                  font-size: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  #blog-dashboard
    .container-fluid
    > .row:nth-child(2)
    > *:first-child
    .card
    .card-body {
    display: none;
  }
}
</style>
