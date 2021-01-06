<template>
  <div id="blog-card-v3" class="card">
    <div class="card-body">
      <h5 class="card-title">
        {{ data.title }}
      </h5>
      <p class="card-text">{{ data.text }}</p>
    </div>
    <div class="card-footer">
      <ul>
        <li>
          <div>
            <img :src="data.avatar" alt="user" />
            <div>
              <h5>{{ data.username }}</h5>
              <p>{{ data.date }}</p>
            </div>
          </div>
          <div>
            <button class="btn btn-outline-secondary">
              <v-icon name="bookmark" scale="0.7" /> <span>Bookmark</span>
            </button>
          </div>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCardV3",
  props: {
    data: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss">
#blog-card-v3 {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  .card-footer {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    ul {
      padding: 0;
      margin: 0;
    }
    ul li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        &:first-child {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
          img {
            width: 32px;
            height: 32px;
            border-radius: 99rem;
            background-color: var(--light-color);
            border: 2px solid white;
            box-shadow: 0 0 1px 1px var(--grey-color);
          }
          h5 {
            margin-bottom: 0;
          }
          p {
            font-size: 0.8rem;
            opacity: 0.7;
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
