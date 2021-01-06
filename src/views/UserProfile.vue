<template>
  <section id="user-profile">
    <div class="section-heading">
      <p>Overview</p>
      <h2>User Profile</h2>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-10 mx-auto">
        <b-card>
          <div class="top">
            <img src="http://placekitten.com/g/120/120" alt="user-image" />
            <h4 class="username">John Doe</h4>
            <h5 class="user-info">Product Manager</h5>
            <button class="btn btn-outline-primary pill">
              <v-icon name="user-plus" scale="0.8"></v-icon> Follow
            </button>
          </div>
          <b-list-group flush>
            <b-list-group-item>
              <h5>
                <span>Workload</span>
                <span class="percentage">{{ percentage }}%</span>
              </h5>
              <b-progress
                :value="percentage"
                max="100"
                class="mb-3"
              ></b-progress>
            </b-list-group-item>
          </b-list-group>
          <div class="bottom">
            <h5>Description</h5>
            <p class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              eaque, quidem, commodi soluta qui quae minima obcaecati quod
              dolorum sint alias, possimus illum assumenda eligendi.
            </p>
          </div>
        </b-card>
      </div>
      <div class="col-lg-8">
        <b-card header-tag="header">
          <template #header>
            <h6 class="mb-0">Account Details</h6>
          </template>
          <b-form @submit="onSubmit">
            <div class="row">
              <div class="col-md-6">
                <b-form-group
                  id="input-group-2"
                  label="First Name:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.fname"
                    placeholder="First name"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group
                  id="input-group-3"
                  label="Last Name:"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.lname"
                    placeholder="Last name"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="example@mail.com"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group
                  id="input-group-4"
                  label="Your Password:"
                  label-for="input-4"
                >
                  <b-form-input
                    id="input-4"
                    v-model="form.password"
                    placeholder="Enter password"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <b-form-group
              id="input-group-5"
              label="Address:"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                v-model="form.address"
                placeholder="123 Main St"
                required
              ></b-form-input>
            </b-form-group>
            <div class="row">
              <div class="col-md-6">
                <b-form-group
                  id="input-group-6"
                  label="City:"
                  label-for="input-6"
                >
                  <b-form-input id="input-6" v-model="form.city"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <b-form-group
                  id="input-group-7"
                  label="State:"
                  label-for="input-7"
                >
                  <b-form-select
                    v-model="selected"
                    :options="options"
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <b-form-group
                  id="input-group-8"
                  label="Zip:"
                  label-for="input-8"
                >
                  <b-form-input id="input-8" v-model="form.zip"></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <b-form-group
                  id="input-group-9"
                  label="Description:"
                  label-for="input-9"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="form.text"
                    placeholder="Enter something..."
                    rows="4"
                  ></b-form-textarea>
                </b-form-group>
              </div>
            </div>
            <button type="submit" class="btn btn-primary ">
              <v-icon name="user-edit"></v-icon> Update Account
            </button>
          </b-form>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserProfile",
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      percentage: 74,
      form: {},
      selected: null,
      options: [{ value: null, text: "Please select an option" }]
    };
  },
  methods: {
    onSubmit() {
      return 0;
    }
  }
};
</script>

<style lang="scss">
#user-profile {
  padding: var(--page-pad);
  input {
    color: var(--dark-color);
  }
  .row {
    > * {
      &:first-child {
        .card {
          .top {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
              border-radius: 99rem;
              margin-bottom: 1rem;
            }
            .username {
              font-weight: 700;
              margin-bottom: 0;
            }
            .user-info {
              opacity: 0.7;
              font-size: 1rem;
              margin-bottom: 1rem;
            }
          }
          .list-group {
            margin: 1.5rem 0;
            border-top: 1px solid var(--grey-color);
            border-bottom: 1px solid var(--grey-color);
            h5 {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 1rem;
              opacity: 0.6;
              font-weight: 700;
            }
            > * {
              padding-bottom: 0;
            }
            .progress {
              height: 0.4rem;
            }
          }
          .bottom {
            h5 {
              font-weight: 700;
              opacity: 0.6;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
