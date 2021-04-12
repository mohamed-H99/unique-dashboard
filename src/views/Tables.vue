<template>
  <section id="tables">
    <div class="section-heading container-fluid">
      <p>Overview</p>
      <h2>Data Tables</h2>
    </div>
    <!-- table 1 -->
    <b-card header-tag="header">
      <template #header>
        <h6 class="mb-0">Active Users</h6>
      </template>
      <b-table :responsive="true" :items="items"></b-table>
    </b-card>
    <!-- table 2 -->
    <b-card header-tag="header">
      <template #header>
        <h6 class="mb-0">Inactive Users</h6>
      </template>
      <b-table dark :responsive="true" :items="items"></b-table>
    </b-card>
  </section>
</template>

<script>
export default {
  name: "Tables",
  data() {
    return {
      items: [
        {
          "#": 0,
          first_name: "Dickerson",
          last_name: "Macdonald",
          country: "Russian Federation",
          city: "Gdańsk",
          phone: "107-0339",
        },
        {
          "#": 1,
          first_name: "Angela",
          last_name: "Colt",
          country: "Estonia",
          city: "Borghetto di Vara",
          phone: "1-660-850-1647",
        },
        {
          "#": 2,
          first_name: "Clark",
          last_name: "Nathan",
          country: "Cyprus",
          city: "Braunau am Inn",
          phone: "214-4225",
        },
        {
          "#": 3,
          first_name: "Jerry",
          last_name: "Angela",
          country: "Liberia",
          city: "Bad Hersfeld",
          phone: "1-848-473-7416",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
#tables {
  padding: var(--page-pad);
  .card {
    &:last-child {
      color: #fff !important;
      background-color: #343a40;
      &-header {
        background-color: #343a40;
      }
      table {
        color: #fff !important;
      }
    }
    overflow: hidden;
    &-body {
      padding: 0;
      table {
        color: var(--dark-color) !important;
        thead {
          background-color: var(--shadow-color);
          tr > * {
            border: 0;
          }
        }
      }
    }
  }
}
</style>
